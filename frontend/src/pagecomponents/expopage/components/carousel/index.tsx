import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  StyledCarouselContainer,
  StyledExpoInfo,
  StyledExpoInfo2,
  StyledExpoInfo3,
  StyledExpoMainPoster,
  StyledExpoMainPoster2,
  StyledExpoMainPosterContainer,
  StyledTextBox,
} from './Carousel.styled';

const Carousel = () => {
  const settings = {
    dots: true, // 페이지 번호 표시
    infinite: true, // 무한 루프
    speed: 2000, // 전환 속도 (밀리초)
    slidesToShow: 1, // 보이는 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤되는 슬라이드 개수
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 3500, // 자동 슬라이드 간격 (밀리초)
    // fade: true,
  };

  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        <StyledExpoMainPosterContainer image="1">
          <StyledTextBox>
            <StyledExpoMainPoster>
              <StyledExpoInfo>아이들과</StyledExpoInfo>
              <StyledExpoInfo>공룡세계엑스포부터</StyledExpoInfo>
              <StyledExpoInfo>고성여행까지!</StyledExpoInfo>
            </StyledExpoMainPoster>
          </StyledTextBox>
        </StyledExpoMainPosterContainer>

        <StyledExpoMainPosterContainer image="2">
          <StyledTextBox>
            <StyledExpoMainPoster2>
              <StyledExpoInfo>2023경남고성공룡엑스포</StyledExpoInfo>
              <StyledExpoInfo2>Gyeongnam Goseong Dinosaur World Expo 2023</StyledExpoInfo2>
              <StyledExpoInfo3>2023.09.11 ~ 2023.09.12(38일간)</StyledExpoInfo3>
              <StyledExpoInfo3>입장시간 00:00 ~ 24:00</StyledExpoInfo3>
            </StyledExpoMainPoster2>
          </StyledTextBox>
        </StyledExpoMainPosterContainer>

        <StyledExpoMainPosterContainer image="3">
          <StyledTextBox>
            <StyledExpoMainPoster>
              <StyledExpoInfo>관광도시 고성에서</StyledExpoInfo>
              <StyledExpoInfo>아이들과 함께 즐겨보세요!</StyledExpoInfo>
            </StyledExpoMainPoster>
          </StyledTextBox>
        </StyledExpoMainPosterContainer>

        <StyledExpoMainPosterContainer image="4">
          <StyledTextBox>
            <StyledExpoMainPoster>
              <StyledExpoInfo>공룡엑스포에 가기 전,</StyledExpoInfo>
              <StyledExpoInfo>공룡에 대해 알아보고 갈까요?</StyledExpoInfo>
            </StyledExpoMainPoster>
          </StyledTextBox>
        </StyledExpoMainPosterContainer>
      </Slider>
    </StyledCarouselContainer>
  );
};

export default Carousel;
