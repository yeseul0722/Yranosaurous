import { useCategoryStore } from '../../../../stores/category/useCategoryStore';
import { StyledCategories, StyledCategory } from './Categories.styled';

const Categories = () => {
  const { selectcat, setselectcat } = useCategoryStore();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledCategories>
        <StyledCategory selected={selectcat === '1'} onClick={() => setselectcat('1')}>
          <img src={`${process.env.REACT_APP_ADMIN_URL}/images/map/place.png`} style={{ width: '35px' }} />
          <div>
            <div>장소</div>
            <div>등록</div>
          </div>
        </StyledCategory>
        <StyledCategory selected={selectcat === '2'} onClick={() => setselectcat('2')}>
          <img src={`${process.env.REACT_APP_ADMIN_URL}/images/map/festival.png`} style={{ width: '35px' }} />
          <div>
            <div>공연</div>
            <div>등록</div>
          </div>
        </StyledCategory>
        <StyledCategory selected={selectcat === '3'} onClick={() => setselectcat('3')}>
          <img src={`${process.env.REACT_APP_ADMIN_URL}/images/map/course.png`} style={{ width: '40px' }} />
          <div>
            <div>코스</div>
            <div>등록</div>
          </div>
        </StyledCategory>
      </StyledCategories>
      <a href="http://j9e102a.p.ssafy.io">
        <img
          src={`${process.env.REACT_APP_ADMIN_URL}/images/menu.png`}
          style={{ width: '35px', marginBottom: '10px', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default Categories;
