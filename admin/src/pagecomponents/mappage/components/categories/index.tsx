import { useCategoryStore } from '../../../../stores/useCategoryStore';
import { StyledCategories, StyledCategory } from './Categories.styled';

const Categories = () => {
  const { selectcat, setselectcat } = useCategoryStore();
  return (
    <StyledCategories>
      <StyledCategory selected={selectcat === '1'} onClick={() => setselectcat('1')}>
        <img src="/images/map/position.png" style={{ width: '35px' }} />
        <div>
          <div>장소</div>
          <div>등록</div>
        </div>
      </StyledCategory>
      <StyledCategory selected={selectcat === '2'} onClick={() => setselectcat('2')}>
        <img src="/images/map/course.png" style={{ width: '40px' }} />
        <div>
          <div>코스</div>
          <div>등록</div>
        </div>
      </StyledCategory>
    </StyledCategories>
  );
};

export default Categories;
