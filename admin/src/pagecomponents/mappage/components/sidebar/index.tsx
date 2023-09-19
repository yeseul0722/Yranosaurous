import { useState } from 'react';
import { useCategoryStore } from '../../../../stores/useCategoryStore';
import { StyledSidebar, StyledSubTitle, StyledTitle } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();
  const [placeName, setPlaceName] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSaveClick = () => {
    const data = {
      위도: props.position.lat,
      경도: props.position.lng,
      장소TYPE: placeType,
      장소명: placeName,
      이미지: image ? image.name : '없음',
    };
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <StyledSidebar {...props}>
      {selectcat === '1' && <StyledTitle>장소 등록하기</StyledTitle>}
      {selectcat === '2' && <StyledTitle>코스 등록하기</StyledTitle>}
      {props.position && (
        <div>
          <div>
            <StyledSubTitle>현재 위치</StyledSubTitle>
            <div>위도 : {props.position.lat}</div>
            <div>경도 : {props.position.lng}</div>
          </div>
          <div>
            <StyledSubTitle>장소 TYPE</StyledSubTitle>
            <div style={{ display: 'flex' }}>
              <button onClick={() => setPlaceType('편의 시설')}>편의 시설</button>
              <button onClick={() => setPlaceType('관람 요소')}>관람 요소</button>
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
            </div>
          </div>
          <button onClick={handleSaveClick}>저장하기</button>

          <button>삭제하기</button>
        </div>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
