import { useCategoryStore } from '../../../../stores/useCategoryStore';
import { StyledSidebar, StyledSubTitle, StyledTitle } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();
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
              <button>편의 시설</button>
              <button>관람 요소</button>
            </div>
            <div>
              <StyledSubTitle>장소명</StyledSubTitle>
              <input />
            </div>
            <div>
              <StyledSubTitle>이미지</StyledSubTitle>
              <input type="file" />
            </div>
            <div>
              <StyledSubTitle>세부사항</StyledSubTitle>
              <input />
            </div>
          </div>
          <button>저장하기</button>
          <button>삭제하기</button>
        </div>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
