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
  Test,
} from './PerformanceCarousel.styled';

const PerformanceCarouselComponent = () => {
  const settings = {
    dots: true, // 페이지 번호 표시
    infinite: true, // 무한 루프
    speed: 1000, // 전환 속도 (밀리초)
    slidesToShow: 1, // 보이는 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤되는 슬라이드 개수
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 2000, // 자동 슬라이드 간격 (밀리초)
    // fade: true,
  };

  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        <StyledExpoMainPosterContainer>
          <Test src="expo_main_pic/performance1.png" alt="performance1" />
        </StyledExpoMainPosterContainer>
        <StyledExpoMainPosterContainer>
          <Test src="expo_main_pic/performance1.png" alt="performance2" />
        </StyledExpoMainPosterContainer>
        <StyledExpoMainPosterContainer>
          <Test src="expo_main_pic/performance1.png" alt="performance3" />
        </StyledExpoMainPosterContainer>
      </Slider>
    </StyledCarouselContainer>
  );
};

export default PerformanceCarouselComponent;
