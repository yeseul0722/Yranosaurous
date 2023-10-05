import useShowOnScroll from '../../../../hooks/expo/useShowOnScroll';
import {
  StyledTourismContainer,
  StyledNavContainer,
  StyledCardContainer,
  StyledCardBoxContainer,
  StyledCardBox,
  StyledCard,
  StyledCardTextBox,
  StyledGOsungContainer,
  StyledGosung,
  StyledText,
} from './Tourism.styled';

const Tourism = () => {
  const { ref, showAnimation } = useShowOnScroll();

  return (
    <StyledTourismContainer>
      <StyledNavContainer ref={ref}>
        <StyledText size="43px">고성에서 어디가지?</StyledText>
        <StyledText size="24px">공룡엑스포만 보고 돌아가기 아쉬울 가족들을 위해 관광정보를 골라봤어요!</StyledText>
      </StyledNavContainer>
      <StyledCardContainer>
        <StyledCardBoxContainer>
          <StyledCardBox color="#6769B1" showAnimation={showAnimation}>
            <StyledCard src="expo_main_pic/restaurant.png" alt="restaurant" />
          </StyledCardBox>
          <StyledCardTextBox>
            <StyledText size="30px">고성의 맛집</StyledText>
            <div>
              <StyledText size="20px">아이들과 함께 즐기기 좋은</StyledText>
              <StyledText size="20px">맛집, 유아시설, 주차 등</StyledText>
            </div>
          </StyledCardTextBox>
        </StyledCardBoxContainer>
        <StyledCardBoxContainer>
          <StyledCardBox color="#DEABAB" showAnimation={showAnimation}>
            <StyledCard src="expo_main_pic/tourism.png" alt="tourism" />
          </StyledCardBox>
          <StyledCardTextBox>
            <StyledText size="30px">관광지</StyledText>
            <div>
              <StyledText size="20px">공룡엑스포만 보고 돌아가기 아쉬울 </StyledText>
              <StyledText size="20px">가족들을 위한 고성관광지 </StyledText>
            </div>
          </StyledCardTextBox>
        </StyledCardBoxContainer>
        <StyledCardBoxContainer>
          <StyledCardBox color="#E6D2FF" showAnimation={showAnimation}>
            <StyledCard src="expo_main_pic/lodgment.png" alt="lodgment" />
          </StyledCardBox>
          <StyledCardTextBox>
            <StyledText size="30px">숙박</StyledText>
            <div>
              <StyledText size="20px">아이들이랑 함께 자기 좋은 숙박시설!</StyledText>
              <StyledText size="20px">키즈 풀빌라, 청결 모두 챙겨보세요</StyledText>
            </div>
          </StyledCardTextBox>
        </StyledCardBoxContainer>
      </StyledCardContainer>
      <StyledGOsungContainer>
        <StyledGosung href="/Gosung"> 가기 좋은 고성 더 보러가기 ➜</StyledGosung>
      </StyledGOsungContainer>
    </StyledTourismContainer>
  );
};

export default Tourism;
