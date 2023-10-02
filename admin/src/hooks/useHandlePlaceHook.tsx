import { useEffect } from 'react';
import { imgstorage } from '../apis/firebase/firebase.config';
import deletePlaceDelete from '../apis/place/deletePlaceDelete';
import enrollPlacePost from '../apis/place/enrollPlacePost';
import updatePlacePut from '../apis/place/updatePlacePut';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { useRefreshCoursesStore } from '../stores/course/useRefreshCourseStore';

interface Place {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  markerNumber: string;
  type: string;
  content: string;
  imgAddress: string;
}

export const useHandlePlaceHook = (state: any, dispatch: any, place: Place, use: 'enroll' | 'update') => {
  const { toggleRefresh, setNoShowMarker } = useRefreshCoursesStore();
  const handleImageClick = (index: string) => {
    dispatch({ type: 'SET_SELECTED_MARKER', payload: index });
  };

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: 'SET_IMAGE_PREVIEW_URL', payload: reader.result as string });
      };
      reader.readAsDataURL(file);

      const fileName = uuid();
      const reference = ref(imgstorage, fileName);

      try {
        await uploadBytes(reference, file);
        const imgUrl = await getDownloadURL(reference);
        dispatch({ type: 'SET_IMAGE_URL', payload: imgUrl });
      } catch (error) {
        // console.error('Error uploading image:', error);
      }
    }
  };

  const handleImageDelete = async () => {
    if (state.imageURL) {
      try {
        // Firebase의 이미지 삭제
        const reference = ref(imgstorage, getFileNameFromURL(state.imageURL));
        await deleteObject(reference);

        // State 업데이트
        dispatch({ type: 'SET_IMAGE_URL', payload: '' });
        dispatch({ type: 'SET_IMAGE_PREVIEW_URL', payload: '' });
      } catch (error) {
        // console.error('Error deleting image:', error);
      }
    }
  };

  const getFileNameFromURL = (url: string) => {
    try {
      const uri = new URL(url);
      const path = uri.pathname;
      return path.substring(path.lastIndexOf('/') + 1);
    } catch (error) {
      // console.error('Error parsing URL:', error);
      return '';
    }
  };

  const handleSaveClick = async () => {
    try {
      const data = {
        name: state.placeName,
        longitude: place.longitude.toString(),
        latitude: place.latitude.toString(),
        imgAddress: state.imageURL,
        content: state.details,
        markerNumber: state.selectedMarker ? parseInt(state.selectedMarker) : 1,
        type: state.placeType === '편의 시설' ? 'CONV' : 'PREVIEW',
      };
      const response = await enrollPlacePost(data);
      toggleRefresh();
      setNoShowMarker();
      if (response) {
        // console.log('Successfully posted:', response);
      }
    } catch (err) {
      // console.error('Error posting data:', err);
    }
  };

  const handleUpdateClick = async () => {
    try {
      const data = {
        name: state.placeName,
        longitude: place.longitude.toString(),
        latitude: place.latitude.toString(),
        imgAddress: state.imageURL,
        content: state.details,
        markerNumber: state.selectedMarker ? parseInt(state.selectedMarker) : 1,
        type: state.placeType === '편의 시설' ? 'CONV' : 'PREVIEW',
      };
      const response = await updatePlacePut(place.id, data);
      toggleRefresh();
      setNoShowMarker();
      if (response) {
        // console.log('Successfully putted:', response);
      }
    } catch (err) {
      // console.error('Error put data:', err);
    }
  };
  const handleDeleteClick = async () => {
    try {
      const response = await deletePlaceDelete(place.id);
      toggleRefresh();
      setNoShowMarker();
      if (response) {
        // console.log('Successfully deleted : ', response);
      }
    } catch (err) {
      // console.error('Error delete data:', err);
    }
  };

  useEffect(() => {
    dispatch({ type: 'SET_PLACE_NAME', payload: place.name });
    dispatch({ type: 'SET_SELECTED_MARKER', payload: place.markerNumber });
    dispatch({ type: 'SET_PLACE_TYPE', payload: place.type });
    dispatch({ type: 'SET_DETAILS', payload: place.content });
    dispatch({ type: 'SET_IMAGE_URL', payload: place.imgAddress });
    dispatch({ type: 'SET_IMAGE_PREVIEW_URL', payload: '' });
  }, [place, dispatch]);

  return {
    state,
    handleImageClick,
    handleImageChange,
    handleImageDelete,
    handleSaveClick,
    handleUpdateClick,
    handleDeleteClick,
  };
};
