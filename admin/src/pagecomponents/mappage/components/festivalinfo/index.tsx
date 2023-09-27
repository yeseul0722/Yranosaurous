import Button from '../../../../components/button';
import { StyledBox, StyledShowText, StyledShowTitle, StyledTimeContainer } from './Festivalinfo.styled';

const FestivalInfo = ({ festival }: any) => {
  return (
    <StyledBox>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledShowTitle>{festival.name}</StyledShowTitle>
        <div style={{ height: '25px', width: '45px', marginTop: '2px' }}>
          <Button ismain="true" label={'삭제'} />
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
