import Carousel from '../carousel';
import { StyledMainContainer, StyledTitle, StyledTitleBox, StyledText, StyledEnglish } from './Main1.styled';

const Main1 = () => {
  return (
    <StyledMainContainer>
      <StyledTitleBox>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/mobile/char1.png" style={{ width: '60px' }} />
          <StyledTitle size="50px"> 상상 그 이상의 공룡세계</StyledTitle>
          <img src="/mobile/char3.png" style={{ width: '60px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledText> 2023.09.22(금) ~ 2023.10.29(일)</StyledText>
          <StyledText style={{ display: 'flex' }}>
            <StyledText color="black">경남고성공룡세계엑스포</StyledText>로 초대합니다!
          </StyledText>
        </div>
      </StyledTitleBox>
      <Carousel />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/mobile/char4.png" />
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <StyledTitle size="43px"> 2023 경남고성공룡세계엑스포</StyledTitle>
          <StyledEnglish>Gyeongnam Goseong Dinosaur World Expo 2023</StyledEnglish>
        </div>
      </div>
    </StyledMainContainer>
  );
};

export default Main1;
