import { StyledMainCard, StyledTitle } from './Maincard.styled';

const MainCard = ({ title, children, num }: any) => {
  return (
    <StyledMainCard num={num}>
      <StyledTitle>{title}</StyledTitle>
      <div style={{ paddingLeft: '10px' }}>{children}</div>
    </StyledMainCard>
  );
};

export default MainCard;
