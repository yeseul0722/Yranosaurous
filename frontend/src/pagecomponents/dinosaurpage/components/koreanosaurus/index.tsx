import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import circle from './dsCircle.json';
import Line from '../../lottie/line.json';
import DottedLine from '../../lottie/dottedLine.json';
import TtsPaly from '../ttsplay';
import {
  StyledKoreasaurusPage,
  StyledKoreasaursFirstContent,
  StyledKoreasaurusTitle,
  StyledKoreasaursLittleTitle,
  StyledKoreasaursTitleNum,
  StyledKoreasaursSummary,
  StyledKoreasaursImage1,
  StyledKoreasaursImage2,
  StyledKoreasaursImage2LottieLine,
  StyledKoreasaursImage2LottieBackLine,
  StyledKoreasaursImage2LottieCircle,
  StyledKoreasaursImage2WeightText,
  StyledKoreasaursSizeContainer,
  StyledKoreasaursSizetImage,
  StyledKoreasaursSizetImageLottie,
  StyledKoreasaursSizeText,
  StyledKoreasaursSecondContent,
  StyledKoreasaursSecondSummary,
  StyledKoreasaursThirdContent,
  StyledKoreasaursThirdBox,
} from './Koreanosaurus.styled';

const KoreasaurusPage = () => {
  const [dsInfo, setDsInfo] = useState();
  const ttsUrl1 = '/dinosaur/tts/koreasaur1.mp3';
  const ttsUrl2 = '/dinosaur/tts/koreasaur2.mp3';

  return (
    <StyledKoreasaurusPage>
      {/* absoulte */}
      <StyledKoreasaursTitleNum>01</StyledKoreasaursTitleNum>
      <StyledKoreasaursImage1 src="/dinosaur/koDs/Koreanosaurus001.png" alt="koreano" />
      <StyledKoreasaursImage2LottieBackLine></StyledKoreasaursImage2LottieBackLine>
      <StyledKoreasaursImage2LottieLine>
        <Lottie animationData={DottedLine} loop autoplay />
      </StyledKoreasaursImage2LottieLine>
      <StyledKoreasaursImage2LottieCircle>
        <Lottie animationData={circle} loop autoplay />
      </StyledKoreasaursImage2LottieCircle>
      <StyledKoreasaursImage2WeightText>0.08T</StyledKoreasaursImage2WeightText>
      <StyledKoreasaursSizetImageLottie>
        <Lottie animationData={DottedLine} loop autoplay />
      </StyledKoreasaursSizetImageLottie>
      <StyledKoreasaursSizeText>1.8M</StyledKoreasaursSizeText>

      {/* 첫번째 내용 */}
      <StyledKoreasaursFirstContent>
        <StyledKoreasaursLittleTitle>
          최초의 한국 지명을 딴 공룡, <TtsPaly src={ttsUrl1} />
        </StyledKoreasaursLittleTitle>
        <StyledKoreasaurusTitle>코리아노사우루스 보성엔시스</StyledKoreasaurusTitle>
        <StyledKoreasaursSummary>
          코리아노사우루스 보성엔시스는 후기 백악기 (8500만 년 전 ~ 8300만 년 전)에 살았으며 한국의 보성군에서 발견된
          육식공룡입니다. <br />
          코리아노사우루스라는 이름은 한국에서 발견된 공룡이라는 뜻에서 비롯되었습니다.
          <br />
          오랜 기간 동안의 발굴 및 복원 작업을 거쳐 세상에 공개되었으며, 조각류의 원시적 형태를 보이고 있습니다.
        </StyledKoreasaursSummary>
      </StyledKoreasaursFirstContent>

      {/* 크기 비교 이미지 */}
      <StyledKoreasaursSizeContainer>
        <StyledKoreasaursSizetImage src="/dinosaur/koDs/koreasaursBack.png" alt="size" />
        {/* 두번째 내용 */}
        <StyledKoreasaursSecondContent>
          <StyledKoreasaursLittleTitle>
            | 코리아노사우루스의 이야기 <TtsPaly src={ttsUrl2} />
          </StyledKoreasaursLittleTitle>
          <StyledKoreasaursSecondSummary>
            코리아노사우루스는 사족보행과 이족보행을 병행하여 걸었을 것으로 추정하고 있습니다. 한국(Korea) 이라는 단어가
            공룡의 이름으로 처음으로 국제학계에 공식적으로 등록되었습니다. 발견당시 암석속에 단단히 묻혀 있어 공룡의
            정체를 파악하는 데에만 5년이라는 기간이 소요 됐습니다. 힙실로포돈트류 공룡들에 비해 강력하고 큰 어깨뼈와
            윗팔뼈가 발달했기 때문에 땅을 파는 동작에 매우 능했을 것으로 추측하고 있습니다. 코리아노사우루스 뼈 화석은
            천연기념물 제418호 전남 보성군 공룡알화석산지의 알둥지 화석들이 발견된 곳에서 발견되었습니다.
          </StyledKoreasaursSecondSummary>
        </StyledKoreasaursSecondContent>
      </StyledKoreasaursSizeContainer>

      {/* 세번째 내용 */}
      {/* <StyledKoreasaursThirdContent>
        <StyledKoreasaursThirdBox></StyledKoreasaursThirdBox>
        <StyledKoreasaursThirdBox></StyledKoreasaursThirdBox>
        <StyledKoreasaursThirdBox></StyledKoreasaursThirdBox>
      </StyledKoreasaursThirdContent> */}
    </StyledKoreasaurusPage>
  );
};

export default KoreasaurusPage;
