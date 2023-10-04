import React, { useState } from 'react';
import Lottie from 'lottie-react';
import DottedLine from '../../lottie/dottedLine.json';
import circle from '../../lottie/dsCircle.json';
import TtsPaly from '../ttsplay';

import {
  StyledCeratopsFirstContent,
  StyledKoreaceratopsPage,
  StyledCeratopsLittleTitle,
  StyledCeratopsTitle,
  StyledCeratopsSummary,
  StyledCeratopsImage1,
  StyledCeratopsSizeImage1,
  StyledCeratopsSecondContent,
  StyledCeratopsSizeContainer,
  StyledCeratopsSizeImgContainer,
  StyledCeratopsLottieLength,
  StyledCeratopsLengthText,
  StyledCeratopsLottieWeight,
  StyledCeratopsWeightText,
  StyledCeratopsTitleNum,
} from './Koreaceratops.styled';

const KoreaceratopsPage = () => {
  const ttsUrlCera1 = '/dinosaur/tts/ceratops1.mp3';
  const ttsUrlCera2 = '/dinosaur/tts/ceratops2.mp3';

  const [isImg, setIsImg] = useState(true);
  const changeImg = () => {
    setIsImg(!isImg);
  };

  return (
    <StyledKoreaceratopsPage>
      {/* absolute */}
      <StyledCeratopsTitleNum>02</StyledCeratopsTitleNum>
      <StyledCeratopsImage1 src="/dinosaur/koDs/ceratops.png" alt="image1"></StyledCeratopsImage1>
      <StyledCeratopsLottieLength>
        <Lottie animationData={DottedLine} loop autoplay />
      </StyledCeratopsLottieLength>
      <StyledCeratopsLengthText>1.8M</StyledCeratopsLengthText>
      <StyledCeratopsLottieWeight>
        <Lottie animationData={circle} loop autoplay />
      </StyledCeratopsLottieWeight>
      <StyledCeratopsWeightText>80KG</StyledCeratopsWeightText>

      {/* 첫번째 내용 */}
      <StyledCeratopsFirstContent>
        <StyledCeratopsLittleTitle>
          한국 최초 뿔공룡, 천연기념물 <TtsPaly src={ttsUrlCera1} />
        </StyledCeratopsLittleTitle>
        <StyledCeratopsTitle>코리아케라톱스 화성엔시스</StyledCeratopsTitle>
        <StyledCeratopsSummary>
          코리아케라톱스는 전기 백악기 (1억 4500만 년 전 ~ 1억 만 년 전)에 살았으며 한국에서 발견된 원시 각룡류
          초식공룡입니다. <br /> 코리아케라톱스 화성엔시스는 ‘화성에서 발견된 한국 뿔 달린 얼굴’ 이라는 이름의 의미를
          가지고 있는 공룡으로서 각룡류의 특징인 부리 형태의 주둥이를 가지고 있었을 것으로 추정되며 꼬리의 신경배돌기는
          꼬리 척추마디보다 5개나 긴 것이 특징입니다. 하반신만 발견되었지만 남겨진 골격은 코리아케라톱스가 이족보행을
          하였음을 보여줍니다.
        </StyledCeratopsSummary>
      </StyledCeratopsFirstContent>

      {/* 두번째 내용 */}
      <StyledCeratopsSizeContainer>
        <StyledCeratopsSecondContent>
          <StyledCeratopsLittleTitle>
            | 코리아케라톱스의 이야기 <TtsPaly src={ttsUrlCera2} />
          </StyledCeratopsLittleTitle>
          <StyledCeratopsSummary>
            코리아케라톱스 화성엔시스는 한국 최초로 발견된 원시 각룡류이며 높고 납작한 꼬리로 헤엄을 잘 칠 수 있는
            형태를 갖고 있다는 것입니다. <br /> 발목 관절이 매우 발달되어 있어 잘 달릴 수 있는 능력이 있었던 것으로
            밝혀졌습니다. <br />
            아직 뿔이 발달하지 않은 원시 각룡류이며 크기도 작았기 때문에 육식공룡의 공격을 받으면 물속으로 피해서
            도망갔을 것으로 추측하고 있습니다.
            <br />
            우리나라에서 각룡류 공룡뼈가 발견되었다는 것은 우리나라에도 다양한 공룡이 살았었음을 알려주는 중요한
            발견입니다.
          </StyledCeratopsSummary>
        </StyledCeratopsSecondContent>
        <StyledCeratopsSizeImgContainer onMouseOver={changeImg}>
          {/* <StyledCeratopsSizeImage1 src="/dinosaur/koDs/ceratopsSize2.png" alt="sizeImage1" /> */}
          <StyledCeratopsSizeImage1 src="/dinosaur/koDs/ceratopsSize.png" alt="sizeImage1" />
        </StyledCeratopsSizeImgContainer>
      </StyledCeratopsSizeContainer>
    </StyledKoreaceratopsPage>
  );
};

export default KoreaceratopsPage;
