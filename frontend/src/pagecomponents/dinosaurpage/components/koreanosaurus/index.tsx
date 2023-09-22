import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import circle from './dsCircle.json';
import {
  StyledKoreasaurusPage,
  StyledKoreasaurusBody,
  StyledKoreasaurusGeneration,
  StyledKoreasaurusTitle,
  StyledKoreasaurusLittleTitle,
  StyledKoreasaurusContent,
  StyledKoreasaurusFigure,
  StyledKoreasaurusImg,
  StyledKoreasaurusCircle,
  StyledKoreasaurusInfo,
  StyledKoreasaurusHeight,
  StyledKoreasaurusWeight,
} from './Koreanosaurus.styled';

const KoreasaurusPage = () => {
  const [dsInfo, setDsInfo] = useState();

  const clickDsInfo = () => {
    console.log('click');
    // setDsInfo();
    axios
      .get(`http://`)
      .then((res: any) => {
        console.log(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <StyledKoreasaurusPage>
      <StyledKoreasaurusBody>
        <StyledKoreasaurusGeneration>
          <img src="/dinosaur/koDs/Koreasaurus_gen.png" />
        </StyledKoreasaurusGeneration>
        <StyledKoreasaurusLittleTitle>최초로 한국 이름을 딴 공룡,</StyledKoreasaurusLittleTitle>
        <StyledKoreasaurusTitle>코리아노사우루스 보성엔시스</StyledKoreasaurusTitle>
        <StyledKoreasaurusContent>
          코리아노사우루스 보성엔시스는 후기 백악기 (8500만 년 전 ~ 8300만 년 전)에 살았으며 한국의 보성군에서 발견된
          육식공룡입니다. 코리아노사우루스라는 이름은 한국에서 발견된 공룡이라는 뜻에서 비롯되었습니다. 오랜 기간 동안의
          발굴 및 복원 작업을 거쳐 세상에 공개되었으며, 조각류의 원시적 형태를 보이고 있습니다.
        </StyledKoreasaurusContent>
      </StyledKoreasaurusBody>
      <StyledKoreasaurusFigure>
        <StyledKoreasaurusImg src="/dinosaur/koDs/Koreanosaurus.png" alt="Koreasaurus"></StyledKoreasaurusImg>
        <StyledKoreasaurusCircle onClick={clickDsInfo}>
          <Lottie animationData={circle} loop autoplay />
        </StyledKoreasaurusCircle>
        <StyledKoreasaurusInfo>
          <StyledKoreasaurusHeight>1.8m</StyledKoreasaurusHeight>
          <StyledKoreasaurusWeight>0.08T</StyledKoreasaurusWeight>
        </StyledKoreasaurusInfo>
      </StyledKoreasaurusFigure>
    </StyledKoreasaurusPage>
  );
};

export default KoreasaurusPage;
