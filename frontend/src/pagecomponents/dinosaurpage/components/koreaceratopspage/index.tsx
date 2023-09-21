import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import circle from './dsCircle.json';
import {
  StyledKoreaceratopsPage,
  StyledKoreaceratopsBody,
  StyledKoreaceratopsGeneration,
  StyledKoreaceratopsTitle,
  StyledKoreaceratopsLittleTitle,
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
    axios
      .get(`http://j9e102A.p.ssafy.io:8080/api/dinosaurs`)
      .then((res: any) => {
        console.log(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <StyledKoreaceratopsPage>
      <StyledKoreaceratopsBody>
        <StyledKoreaceratopsGeneration>
          <img src="/dinosaur/koDs/Koreaceratops_gen.png" />
        </StyledKoreaceratopsGeneration>
        <StyledKoreaceratopsLittleTitle>최초로 한국 이름을 딴 화성 뿔공룡,</StyledKoreaceratopsLittleTitle>
        <StyledKoreaceratopsTitle>코리아케라톱스</StyledKoreaceratopsTitle>
        <StyledKoreaceratopsContent>
          코리아노사우루스 보성엔시스는 후기 백악기 (8500만 년 전 ~ 8300만 년 전)에 살았으며 한국의 보성군에서 발견된
          육식공룡입니다. 코리아노사우루스라는 이름은 한국에서 발견된 공룡이라는 뜻에서 비롯되었습니다. 오랜 기간 동안의
          발굴 및 복원 작업을 거쳐 세상에 공개되었으며, 조각류의 원시적 형태를 보이고 있습니다.
        </StyledKoreaceratopsContent>
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
