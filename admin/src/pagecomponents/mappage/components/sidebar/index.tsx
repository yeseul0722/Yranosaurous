import { useCategoryStore } from '../../../../stores/useCategoryStore';
import Enrollplace from '../enrollplace';
import { StyledSidebar, StyledTitle } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();

  return (
    <StyledSidebar {...props}>
      {selectcat === '1' && <StyledTitle>장소 등록/수정하기</StyledTitle>}
      {selectcat === '2' && <StyledTitle>공연 등록/수정하기</StyledTitle>}
      {selectcat === '3' && <StyledTitle>코스 등록/수정하기</StyledTitle>}
      {props.position && <div>{selectcat === '1' && <Enrollplace position={props.position} />}</div>}
    </StyledSidebar>
  );
};

export default Sidebar;
