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
          <StyledSubTitle>현재 위치</StyledSubTitle>
          <div>위도 : {props.position.lat}</div>
          <div>경도 : {props.position.lng}</div>
        </div>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
