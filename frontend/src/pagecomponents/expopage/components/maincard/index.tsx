import { StyledMainCard, StyledTitle } from './Maincard.styled';

const MainCard = (props: any) => {
  return (
    <StyledMainCard num={props.num} showAnimation={props.showAnimation ? 'true' : 'false'}>
      <StyledTitle>{props.title}</StyledTitle>
      <div style={{ paddingLeft: '10px' }}>{props.children}</div>
    </StyledMainCard>
  );
};

export default MainCard;
