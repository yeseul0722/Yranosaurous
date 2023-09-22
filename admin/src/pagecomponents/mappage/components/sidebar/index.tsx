import Button from '../../../../components/button';
import Input from '../../../../components/input';
import useInputHook from '../../../../hooks/useInputHook';
import { useCategoryStore } from '../../../../stores/useCategoryStore';
import { StyledSidebar, StyledSubTitle, StyledTitle, StyledBox, StyledTextarea } from './Sidebar.styled';
import TextareaAutosize from 'react-textarea-autosize';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();
  const {
    placeName,
    setPlaceName,
    selectedMarker,
    setSelectedMarker,
    details,
    setDetails,
    placeType,
    setPlaceType,
    image,
    setImage,
  } = useInputHook();

  const handleSaveClick = () => {
    const data = {
      위도: props.position.lat,
      경도: props.position.lng,
      장소TYPE: placeType,
      장소명: placeName,
      이미지: image ? image.name : '없음',
      세부사항: details,
    };
    console.log(JSON.stringify(data, null, 2));
  };

  const handleImageClick = (alt: any) => {
    setSelectedMarker(alt);
  };

  return (
    <StyledSidebar {...props}>
      {selectcat === '1' && <StyledTitle>장소 등록/수정하기</StyledTitle>}
      {selectcat === '2' && <StyledTitle>공연 등록/수정하기</StyledTitle>}
      {selectcat === '3' && <StyledTitle>코스 등록/수정하기</StyledTitle>}
      {props.position && (
        <div>
          <div style={{ display: 'flex', gap: '13px', flexDirection: 'column' }}>
            <div>
              <StyledSubTitle>현재 위치</StyledSubTitle>
              <StyledBox>
                <div style={{ paddingLeft: '15px' }}>위도 : {props.position.lat}</div>
              </StyledBox>
              <StyledBox>
                <div style={{ paddingLeft: '15px' }}>경도 : {props.position.lng}</div>
              </StyledBox>
            </div>
            <div>
              <StyledSubTitle>마커 고르기</StyledSubTitle>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  height: '260px',
                  alignContent: 'space-between',
                }}
              >
                <img
                  src="/images/map/markers/dino.png"
                  alt="1"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '1' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('1')}
                />
                <img
                  src="/images/map/markers/baby.png"
                  alt="2"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '2' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('2')}
                />
                <img
                  src="/images/map/markers/biking.png"
                  alt="3"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '3' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('3')}
                />
                <img
                  src="/images/map/markers/cafe.png"
                  alt="4"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '4' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('4')}
                />
                <img
                  src="/images/map/markers/3d.png"
                  alt="5"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '5' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('5')}
                />
                <img
                  src="/images/map/markers/food.png"
                  alt="6"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '6' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('6')}
                />
                <img
                  src="/images/map/markers/foodcart.png"
                  alt="7"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '7' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('7')}
                />
                <img
                  src="/images/map/markers/museum.png"
                  alt="8"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '8' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('8')}
                />
                <img
                  src="/images/map/markers/park.png"
                  alt="9"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '9' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('9')}
                />
                <img
                  src="/images/map/markers/plant.png"
                  alt="10"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '10' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('10')}
                />
                <img
                  src="/images/map/markers/play.png"
                  alt="11"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '11' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('11')}
                />
                <img
                  src="/images/map/markers/stroller.png"
                  alt="12"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '12' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('12')}
                />
                <img
                  src="/images/map/markers/toilet.png"
                  alt="13"
                  style={{
                    width: '58px',
                    height: '58px',
                    border: selectedMarker === '13' ? '1.8px solid #599198' : 'none',
                  }}
                  onClick={() => handleImageClick('13')}
                />
              </div>
            </div>
            <div>
              <StyledSubTitle>장소 TYPE</StyledSubTitle>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '120px', height: '35px' }}>
                  <Button
                    onClick={() => setPlaceType('편의 시설')}
                    label="편의 시설"
                    ismain={placeType === '편의 시설' ? 'true' : 'false'}
                  ></Button>
                </div>
                <div style={{ width: '120px', height: '35px' }}>
                  <Button
                    onClick={() => setPlaceType('관람 요소')}
                    label="관람 요소"
                    ismain={placeType === '관람 요소' ? 'true' : 'false'}
                  ></Button>
                </div>
              </div>
            </div>
            <div>
              <StyledSubTitle>장소명</StyledSubTitle>
              <div style={{ height: '33px' }}>
                <Input value={placeName} onChange={(e: any) => setPlaceName(e.target.value)} />
              </div>
            </div>

            <div>
              <StyledSubTitle>이미지</StyledSubTitle>
              <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
            </div>
            <div>
              <StyledSubTitle>세부사항</StyledSubTitle>
              <StyledTextarea value={details} onChange={(e: any) => setDetails(e.target.value)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '120px', height: '45px' }}>
                <Button onClick={handleSaveClick} label="삭제 하기" ismain="false"></Button>
              </div>
              <div style={{ width: '120px', height: '45px' }}>
                <Button onClick={handleSaveClick} label="저장 하기" ismain="true"></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
