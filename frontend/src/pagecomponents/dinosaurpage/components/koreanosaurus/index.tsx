import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import circle from './dsCircle.json';
import Line from '../../lottie/line.json';
import {
  StyledKoreasaurusPage,
  StyledKoreasaurusBody,
  StyledKoreasaurusPageFirst,
  StyledKoreasaurusGeneration,
  StyledKoreasaursTag,
  StyledKoreasaurusTitle,
  StyledKoreasaursTitleNumber,
  StyledKoreasaurusLittleTitle,
  StyledKoreasaurusContent,
  StyledKoreasaurusFigure,
  StyledKoreasaurusImg,
  StyledKoreasaurusCircle,
  StyledKoreasaurusInfo,
  StyledKoreasaurusHeight,
  StyledKoreasaurusWeight,
  StyledKoreasaurusLine,
  StyledKoreasaurusCircleWeight,
  StyledKoreasaurusLineWeight,
  StyledKoreasaurusPageSecond,
  StyledKoreaSaursGoWatch,
} from './Koreanosaurus.styled';

const KoreasaurusPage = () => {
  const [dsInfo, setDsInfo] = useState();

  const clickDsInfo = () => {
    console.log('click');
  };

  return (
    <StyledKoreasaurusPage>
      <StyledKoreasaurusPageFirst>
        <StyledKoreasaurusBody>
          {/* <StyledKoreasaurusGeneration>
          <img src="/dinosaur/koDs/Koreasaurus_gen.png" />
        </StyledKoreasaurusGeneration> */}
          {/* <StyledKoreasaursTitleNumber>01</StyledKoreasaursTitleNumber> */}
          <StyledKoreasaursTag># 육식공룡 # 유라시아 # 한국</StyledKoreasaursTag>
          <StyledKoreasaurusLittleTitle>최초로 한국 이름을 딴 공룡,</StyledKoreasaurusLittleTitle>
          <StyledKoreasaurusTitle>코리아노사우루스 보성엔시스</StyledKoreasaurusTitle>
          <StyledKoreasaurusContent>
            코리아노사우루스 보성엔시스는 후기 백악기 (8500만 년 전 ~ 8300만 년 전)에 살았으며 한국의 보성군에서 발견된
            육식공룡입니다. <br /> 코리아노사우루스라는 이름은 한국에서 발견된 공룡이라는 뜻에서 비롯되었습니다. <br />
            오랜 기간 동안의 발굴 및 복원 작업을 거쳐 세상에 공개되었으며, 조각류의 원시적 형태를 보이고 있습니다.
          </StyledKoreasaurusContent>
        </StyledKoreasaurusBody>
        <StyledKoreasaurusFigure>
          <StyledKoreasaurusImg src="/dinosaur/koDs/Koreanosaurus.png" alt="Koreasaurus"></StyledKoreasaurusImg>
          {/* 키 */}
          {/* <StyledKoreasaurusCircle onClick={clickDsInfo}>
            <Lottie animationData={circle} loop autoplay />
          </StyledKoreasaurusCircle>
          <StyledKoreasaurusLine>
            <Lottie animationData={Line} loop autoplay />
          </StyledKoreasaurusLine>
          <StyledKoreasaurusHeight>1.8m</StyledKoreasaurusHeight> */}
          {/* 몸무게 */}
          {/* <StyledKoreasaurusCircleWeight>
            <Lottie animationData={circle} loop autoplay />
          </StyledKoreasaurusCircleWeight>
          <StyledKoreasaurusLineWeight>
            <Lottie animationData={Line} loop autoplay />
          </StyledKoreasaurusLineWeight>
          <StyledKoreasaurusWeight>0.08T</StyledKoreasaurusWeight> */}
        </StyledKoreasaurusFigure>
      </StyledKoreasaurusPageFirst>
      <StyledKoreasaurusPageSecond>
        <StyledKoreasaurusFigure>
          <StyledKoreasaurusImg src="/dinosaur/koDs/koreasaursBack.png" alt="Koreasaurus2"></StyledKoreasaurusImg>
        </StyledKoreasaurusFigure>
        <StyledKoreasaurusBody>
          <StyledKoreasaurusContent>
            - 코리아노사우루스의 형태는 힙실로포돈과 비슷한 형태를 하고 있으며, 사족보행과 이족보행을 병행하여 걸었을
            것으로 추정하고 있습니다. <br /> <br /> - 한국(Korea) 이라는 단어가 공룡의 이름으로 처음으로 국제학계에
            공식적으로 등록된 ‘코리아노사우루스 보성엔시스’는 발견당시 암석속에 단단히 묻혀 있어 발굴 작업만 뼈화석
            주위를 둘러싼 암석들을 제거하고 공룡의 정체를 파악하는 데에만 5년이라는 기간이 소요 됐습니다. <br /> <br />-
            견갑골(어깨뼈), 상완골(윗팔뼈), 뒷다리뼈, 목뼈, 갈비뼈, 꼬리뼈 등이 발견되었으며 힙실로포돈트류 공룡들에
            비해 강력하고 큰 어깨뼈와 윗팔뼈가 발달했기 때문에 땅을 파는 동작에 매우 능했을 것으로 추측하고 있습니다.{' '}
          </StyledKoreasaurusContent>
          <StyledKoreaSaursGoWatch>코리아노사우루스 직접 보러가기 ▼</StyledKoreaSaursGoWatch>
        </StyledKoreasaurusBody>
      </StyledKoreasaurusPageSecond>
    </StyledKoreasaurusPage>
  );
};

export default KoreasaurusPage;
