import Button from '../../../../components/button';
import useInputHook from '../../../../hooks/useInputHook';
import { useCategoryStore } from '../../../../stores/useCategoryStore';
import { StyledSidebar, StyledSubTitle, StyledTitle, StyledBox } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();
  const { placeName, setPlaceName, details, setDetails, placeType, setPlaceType, image, setImage } = useInputHook();
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

  return (
    <StyledSidebar {...props}>
      {selectcat === '1' && <StyledTitle>장소 등록/수정하기</StyledTitle>}
      {selectcat === '2' && <StyledTitle>공연 등록/수정하기</StyledTitle>}
      {selectcat === '3' && <StyledTitle>코스 등록/수정하기</StyledTitle>}
      {props.position && (
        <div>
          <div style={{ display: 'flex', gap: '25px', flexDirection: 'column' }}>
            <div>
              <StyledSubTitle>현재 위치</StyledSubTitle>
              <StyledBox>위도 : {props.position.lat}</StyledBox>
              <StyledBox>경도 : {props.position.lng}</StyledBox>
            </div>
            <div>
              <StyledSubTitle>장소 TYPE</StyledSubTitle>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '120px', height: '45px' }}>
                  <Button
                    onClick={() => setPlaceType('편의 시설')}
                    label="편의 시설"
                    ismain={placeType === '편의 시설' ? 'true' : 'false'}
                  ></Button>
                </div>
                <div style={{ width: '120px', height: '45px' }}>
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
              <input value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
            </div>
            <div>
              <StyledSubTitle>이미지</StyledSubTitle>
              <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
            </div>
            <div>
              <StyledSubTitle>세부사항</StyledSubTitle>
              <input value={details} onChange={(e) => setDetails(e.target.value)} />
            </div>
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
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
