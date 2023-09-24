import { useCategoryStore } from '../../../../stores/useCategoryStore';
import Enrollplace from '../enrollplace';
import { StyledSidebar, StyledTitle } from './Sidebar.styled';

const Sidebar = (props: any) => {
  const { selectcat } = useCategoryStore();

  return (
    <StyledSidebar {...props}>
      {props.use === 'update' && selectcat === '1' && <StyledTitle>장소 수정하기</StyledTitle>}
      {props.use === 'enroll' && selectcat === '1' && (
        <div>
          <StyledTitle> 장소 등록하기</StyledTitle>
          {props.position && <div>{selectcat === '1' && <Enrollplace position={props.position} />}</div>}
        </div>
      )}
      {selectcat === '2' && <StyledTitle>공연 등록/수정하기</StyledTitle>}
      {selectcat === '3' && <StyledTitle>코스 등록/수정하기</StyledTitle>}
    </StyledSidebar>
  );
};

export default Sidebar;
