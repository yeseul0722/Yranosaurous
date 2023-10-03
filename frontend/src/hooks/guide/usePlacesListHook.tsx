import { useEffect, useState } from 'react';
import placesListGet from '../../apis/guide/placesListGet';
import useGuideStore from '../../stores/guide/useGuideStore';
import useMobileGuide from '../../stores/guide/useMobileGuide';

export const usePlacesListHook = () => {
  const [placesList, setPlacesList] = useState([]); // 모든 편의시설의 리스트를 받아옴
  const place = useGuideStore((state: any) => state.place);
  const setPlace = useGuideStore((state: any) => state.setPlace);
  // const [selectPlace, setSelectPlaec] = useState();

  const setSelectPlace = useGuideStore((state: any) => state.setSelectPlace);
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const resetPlace = useGuideStore((state: any) => state.resetPlace);
  const getPlacesList = async () => {
    const res = await placesListGet();
    setPlacesList(res.data.response);
  };

  const handlePlace = (data: any) => {
    setPlace(data);
    setSelectPlace(data.id);
  };

  useEffect(() => {
    setSelectPlace();
    resetPlace();
  }, [selectCategory]);

  return { place, placesList, getPlacesList, handlePlace };
};
