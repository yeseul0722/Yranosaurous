import Button from '../../../../../components/button';
import Input from '../../../../../components/input';
import { StyledSubTitle, StyledBox, StyledTextarea, StyledFileInputLabel, HiddenFileInput } from './Enrollplace.styled';
import usePlaceHook from '../../../../../hooks/usePlaceHook';
import { useHandlePlaceHook } from '../../../../../hooks/useHandlePlaceHook';
import { EnrollPlacePropsType } from './Enrollplace.type';

const Enrollplace = ({ place, use }: EnrollPlacePropsType) => {
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
    'drawing',
    'bridge',
  ];

  const {
    handleImageClick,
    handleImageChange,
    handleImageDelete,
    handleSaveClick,
    handleUpdateClick,
    handleDeleteClick,
  } = useHandlePlaceHook(state, dispatch, place, use);

  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
        <div style={{ display: 'flex', gap: '18px', flexDirection: 'column' }}>
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
                  src={`${process.env.REACT_APP_ADMIN_URL}/images/map/markers/${imageName}.png`}
                  alt={`${index + 1}`}
                  style={{
                    width: '58px',
                    height: '58px',
                    border: state.selectedMarker == `${index + 1}` ? '1.8px solid #599198' : 'none',
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
              style={{ height: '33px', width: '235px' }}
            />
          </div>

          <div style={{ position: 'relative', height: '35px' }}>
            {state.imageURL ? (
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '50%', height: '35px' }}>
                  <Button onClick={handleImageDelete} ismain="true" label="이미지 삭제"></Button>
                </div>
                <img src={state.imageURL} alt="Uploaded" style={{ maxHeight: '35px' }} />
              </div>
            ) : (
              <>
                <StyledFileInputLabel htmlFor="fileInput">이미지 추가</StyledFileInputLabel>
                <HiddenFileInput id="fileInput" onChange={handleImageChange} />
              </>
            )}
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
        <Button
          onClick={handleDeleteClick}
          label="삭제 하기"
          ismain="false"
          style={{ width: '120px', height: '45px' }}
        />
        {use === 'enroll' ? (
          <Button
            onClick={handleSaveClick}
            label="등록 하기"
            ismain="true"
            style={{ width: '120px', height: '45px' }}
          />
        ) : (
          <Button
            onClick={handleUpdateClick}
            label="수정 하기"
            ismain="true"
            style={{ width: '120px', height: '45px' }}
          />
        )}
      </div>
    </div>
  );
};

export default Enrollplace;
