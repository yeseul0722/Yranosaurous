import {
  StyledCarouselContainer,
  StyledExpoInfo,
  StyledExpoInfo2,
  StyledExpoInfo3,
  StyledExpoMainPoster,
  StyledExpoMainPoster2,
  StyledExpoMainPosterContainer,
} from './MainImage.styled';
import ProgressComponent from '../progress';
import { useState, useEffect } from 'react';

const MainImageComponent = (props: any) => {
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    setTranslateX(-100 * props.time);
  }, [props.time]);
  return (
    <StyledCarouselContainer translateX={translateX}>
      <StyledExpoMainPosterContainer num="1">
        <StyledExpoMainPoster>
          <StyledExpoInfo>아이들과</StyledExpoInfo>
          <StyledExpoInfo>공룡세계엑스포부터</StyledExpoInfo>
          <StyledExpoInfo>고성여행까지!</StyledExpoInfo>
        </StyledExpoMainPoster>
        <ProgressComponent></ProgressComponent>
      </StyledExpoMainPosterContainer>

      <StyledExpoMainPosterContainer num="2">
        <StyledExpoMainPoster2>
          <StyledExpoInfo>2023경남고성공룡엑스포</StyledExpoInfo>
          <StyledExpoInfo2>Gyeongnam Goseong Dinosaur World Expo 2023</StyledExpoInfo2>
          <StyledExpoInfo3>2023.09.11 ~ 2023.09.12(38일간)</StyledExpoInfo3>
          <StyledExpoInfo3>입장시간 00:00 ~ 24:00</StyledExpoInfo3>
        </StyledExpoMainPoster2>
        <ProgressComponent></ProgressComponent>
      </StyledExpoMainPosterContainer>

      <StyledExpoMainPosterContainer num="3">
        <StyledExpoMainPoster>
          <StyledExpoInfo>관광도시 고성에서</StyledExpoInfo>
          <StyledExpoInfo>아이들과 함께 즐겨보세요!</StyledExpoInfo>
        </StyledExpoMainPoster>
        <ProgressComponent></ProgressComponent>
      </StyledExpoMainPosterContainer>

      <StyledExpoMainPosterContainer num="4">
        <StyledExpoMainPoster>
          <StyledExpoInfo>공룡엑스포에 가기 전,</StyledExpoInfo>
          <StyledExpoInfo>공룡에 대해 알아보고 갈까요?</StyledExpoInfo>
        </StyledExpoMainPoster>
        <ProgressComponent></ProgressComponent>
      </StyledExpoMainPosterContainer>
    </StyledCarouselContainer>
  );
};

export default MainImageComponent;
