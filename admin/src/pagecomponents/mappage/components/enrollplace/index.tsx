import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { StyledSubTitle, StyledBox, StyledTextarea } from './Enrollplace.styled';
import usePlaceHook from '../../../../hooks/usePlaceHook';

interface Props {
  position: {
    lat: number;
    lng: number;
  };
}

const Enrollplace = ({ position }: Props) => {
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

  const handleSaveClick = () => {
    const data = {
      위도: position.lat,
      경도: position.lng,
      장소TYPE: state.placeType,
      장소명: state.placeName,
      이미지: state.image ? state.image.name : '없음',
      세부사항: state.details,
    };
    console.log(JSON.stringify(data, null, 2));
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
              <div style={{ paddingLeft: '15px' }}>위도 : {position.lat}</div>
            </StyledBox>
            <StyledBox>
              <div style={{ paddingLeft: '15px' }}>경도 : {position.lng}</div>
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
                    border: state.selectedMarker === `${index + 1}` ? '1.8px solid #599198' : 'none',
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

          <div>
            <StyledSubTitle>이미지</StyledSubTitle>
            <input
              type="file"
              onChange={(e) => dispatch({ type: 'SET_IMAGE', payload: e.target.files ? e.target.files[0] : null })}
            />
          </div>

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
