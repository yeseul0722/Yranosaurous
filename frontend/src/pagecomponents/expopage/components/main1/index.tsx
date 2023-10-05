import Carousel from '../carousel';
import MainCard from '../maincard';
import {
  StyledMainContainer,
  StyledTitle,
  StyledTitleBox,
  StyledText,
  StyledEnglish,
  StyledCardBox,
} from './Main1.styled';
import useShowOnScroll from '../../../../hooks/expo/useShowOnScroll';

const Main1 = () => {
  const { ref, showAnimation } = useShowOnScroll();

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
          <StyledTitle size="43px">2023 경남고성공룡세계엑스포</StyledTitle>
          <StyledEnglish>Gyeongnam Goseong Dinosaur World Expo 2023</StyledEnglish>
        </div>
      </div>

      <StyledCardBox ref={ref}>
        {showAnimation && (
          <>
            <MainCard title="| 일정" num="1" showAnimation={showAnimation}>
              <div>2023.09.22(금) ~ 2023.10.29(일)</div>
            </MainCard>
            <MainCard title="| 장소" num="2" showAnimation={showAnimation}>
              <div>경남 고성군 회화면 당항포관광지</div>
            </MainCard>
            <MainCard title="| 개장 시간" num="3" showAnimation={showAnimation}>
              <div>월~목 (09:00 ~ 18:00)</div>
              <div>금~토 (09:00 ~ 22:00)</div>
            </MainCard>
          </>
        )}
      </StyledCardBox>
    </StyledMainContainer>
  );
};

export default Main1;
