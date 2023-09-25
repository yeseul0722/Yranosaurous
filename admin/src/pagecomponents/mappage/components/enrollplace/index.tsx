import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { StyledSubTitle, StyledBox, StyledTextarea } from './Enrollplace.styled';
import usePlaceHook from '../../../../hooks/usePlaceHook';
import enrollPlacePost from '../../../../apis/place/enrollPlacePost';

interface Props {
  place: {
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    markerNumber: string;
    type: string;
    content: string;
    imgAddress: string;
  };
  use: 'enroll' | 'update';
}

// interface State {
//   placeName: string;
//   selectedMarker: string;
//   details: string;
//   placeType: string;
//   image: string;
// }

const Enrollplace = ({ place, use }: Props) => {
  // const initialState: State = {
  //   placeName: use === 'enroll' ? '' : place.name || '',
  //   selectedMarker: use === 'enroll' ? '' : place.markerNumber || '',
  //   details: use === 'enroll' ? '' : place.content || '',
  //   placeType: use === 'enroll' ? '' : place.type || '',
  //   image: use === 'enroll' ? '' : place.imgAddress || '',
  // };

  // const { state, dispatch } = usePlaceHook(initialState);
  const { state, dispatch } = usePlaceHook();
  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
  ];

  const handleSaveClick = async () => {
    try {
      const data = {
        name: state.placeName,
        longitude: place.longitude.toString(),
        latitude: place.latitude.toString(),
        // imgAddress: state.image ? state.image.name : '',
        imgAddress: '',
        content: state.details,
        markerNumber: state.selectedMarker ? parseInt(state.selectedMarker) : 1,
        type: state.placeType === '편의 시설' ? 'CONV' : 'PREVIEW',
      };
      const response = await enrollPlacePost(data);
      if (response) {
        console.log('Successfully posted:', response);
      }
    } catch (err) {
      console.error('Error posting data:', err);
    }
  };

  const handleImageClick = (alt: string) => {
    dispatch({ type: 'SET_SELECTED_MARKER', payload: alt });
  };

  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
        <div style={{ display: 'flex', gap: '13px', flexDirection: 'column' }}>
          <div>
            <StyledSubTitle>현재 위치</StyledSubTitle>
            <StyledBox>
              <div style={{ paddingLeft: '15px' }}>위도 : {place.latitude}</div>
            </StyledBox>
            <StyledBox>
              <div style={{ paddingLeft: '15px' }}>경도 : {place.longitude}</div>
            </StyledBox>
          </div>

          <div>
            <StyledSubTitle>마커 고르기</StyledSubTitle>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                height: '260px',
                alignContent: 'space-around',
                cursor: 'pointer',
              }}
            >
              {imageArray.map((imageName, index) => (
                <img
                  key={index + 1}
                  src={`/images/map/markers/${imageName}.png`}
                  alt={`${index + 1}`}
                  style={{
                    width: '58px',
                    height: '58px',
                    border:
                      state.selectedMarker === `${index + 1}` ||
                      (place.markerNumber && place.markerNumber === `${index}`)
                        ? '1.8px solid #599198'
                        : 'none',
                  }}
                  onClick={() => handleImageClick(`${index + 1}`)}
                />
              ))}
            </div>
          </div>

          <div>
            <StyledSubTitle>장소 TYPE</StyledSubTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                onClick={() => dispatch({ type: 'SET_PLACE_TYPE', payload: '편의 시설' })}
                label="편의 시설"
                ismain={state.placeType === '편의 시설' ? 'true' : 'false'}
                style={{ width: '120px', height: '35px' }}
              />
              <Button
                onClick={() => dispatch({ type: 'SET_PLACE_TYPE', payload: '관람 요소' })}
                label="관람 요소"
                ismain={state.placeType === '관람 요소' ? 'true' : 'false'}
                style={{ width: '120px', height: '35px' }}
              />
            </div>
          </div>

          <div>
            <StyledSubTitle>장소명</StyledSubTitle>
            <Input
              value={state.placeName}
              onChange={(e: any) => dispatch({ type: 'SET_PLACE_NAME', payload: e.target.value })}
              style={{ height: '33px' }}
            />
          </div>

          {/* <div>
            <StyledSubTitle>이미지</StyledSubTitle>
            <input
              type="file"
              onChange={(e) => dispatch({ type: 'SET_IMAGE', payload: e.target.files ? e.target.files[0] : null })}
            />
          </div> */}

          <div style={{ marginBottom: '20px' }}>
            <StyledSubTitle>세부사항</StyledSubTitle>
            <StyledTextarea
              value={state.details}
              onChange={(e: any) => dispatch({ type: 'SET_DETAILS', payload: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', paddingTop: '15px' }}>
        <Button onClick={handleSaveClick} label="삭제 하기" ismain="false" style={{ width: '120px', height: '45px' }} />
        <Button onClick={handleSaveClick} label="저장 하기" ismain="true" style={{ width: '120px', height: '45px' }} />
      </div>
    </div>
  );
};

export default Enrollplace;
