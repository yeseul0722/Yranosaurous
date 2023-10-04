import showDelete from '../../../../../apis/show/showDelete';
import Button from '../../../../../components/button';
import { useRefreshCoursesStore } from '../../../../../stores/course/useRefreshCourseStore';
import { StyledBox, StyledShowText, StyledShowTitle, StyledTimeContainer } from './Festivalinfo.styled';

const FestivalInfo = ({ festival, onFestivalDelete }: any) => {
  const { toggleRefresh } = useRefreshCoursesStore();

  const handleDeleteClick = async () => {
    try {
      const response = await showDelete(festival.id);
      if (response) {
        // console.log('Successfully deleted : ', response);
        if (onFestivalDelete) onFestivalDelete();
        toggleRefresh();
      }
    } catch (err) {
      // console.error('Error delete data:', err);
    }
  };

  return (
    <StyledBox>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledShowTitle>{festival.name}</StyledShowTitle>
        <div style={{ height: '25px', width: '45px', marginTop: '2px' }}>
          <Button ismain="true" label={'삭제'} onClick={handleDeleteClick} />
        </div>
      </div>
      <StyledTimeContainer>
        <StyledShowText>{festival.startTime.split('T')[0].split('-').join('.')}</StyledShowText>
        <StyledShowText>{festival.startTime.split('T')[1].split(':').slice(0, 2).join(':')}</StyledShowText>
      </StyledTimeContainer>
    </StyledBox>
  );
};

export default FestivalInfo;
