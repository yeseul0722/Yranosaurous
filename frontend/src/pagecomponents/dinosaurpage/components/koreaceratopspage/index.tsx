import React, { useState } from 'react';
import Lottie from 'lottie-react';
import circle from './dsCircle.json';
import {
  StyledKoreaceratopsPage,
  StyledKoreaceratopsBody,
  StyledKoreaceratopsGeneration,
  StyledKoreaceratopsTitle,
  StyledKoreaceratopsContent,
  StyledKoreaceratopsFigure,
  StyledKoreaceratopsImg,
  StyledKoreaceratopsCircle,
  StyledKoreaceratopsInfo,
  StyledKoreaceratopsHeight,
  StyledKoreaceratopsWeight,
} from './Koreaceratops.styled';

const KoreaceratopsPage = () => {
  const [dsInfo, setDsInfo] = useState();

  const clickDsInfo = () => {
    console.log('click');
    // setDsInfo();
  };
  return (
    <StyledKoreaceratopsPage>
      <StyledKoreaceratopsBody>
        <StyledKoreaceratopsGeneration>
          <img src="/dinosaur/koDs/Koreaceratops_gen.png" />
        </StyledKoreaceratopsGeneration>
        <StyledKoreaceratopsTitle></StyledKoreaceratopsTitle>
        <StyledKoreaceratopsContent></StyledKoreaceratopsContent>
      </StyledKoreaceratopsBody>
      <StyledKoreaceratopsFigure>
        <StyledKoreaceratopsImg src="/dinosaur/koDs/Koreaceratops_001.png" alt="Koreaceratops"></StyledKoreaceratopsImg>
        <StyledKoreaceratopsCircle onClick={clickDsInfo}>
          <Lottie animationData={circle} loop autoplay />
        </StyledKoreaceratopsCircle>
        <StyledKoreaceratopsInfo>
          <StyledKoreaceratopsHeight>1.8m</StyledKoreaceratopsHeight>
          <StyledKoreaceratopsWeight>0.08T</StyledKoreaceratopsWeight>
        </StyledKoreaceratopsInfo>
      </StyledKoreaceratopsFigure>
    </StyledKoreaceratopsPage>
  );
};

export default KoreaceratopsPage;
