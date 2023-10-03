import React, { useState } from 'react';
import Lottie from 'lottie-react';
import DottedLine from '../../lottie/dottedLine.json';
import circle from '../../lottie/dsCircle.json';
import TtsPaly from '../ttsplay';

import {
  StyledpukyongsaurusPage,
  StyledPukyongFirstContent,
  StyledPukongTitle,
  StyledPukongLitteTitle,
  StyledPukongSummary,
  StyledPukyongImage1,
  StyledPukyongSizeContainer,
  StyledPukyongSizeImgContainer,
  StyledPukyongSecondContent,
  StyledPukyongSizeImage1,
  StyledPukyongLottieLength,
  StyledPukyongLengthText,
  StyledPukyongLottieWeight,
  StyledPukyongWeightText,
  StyledPukyongTitleNum,
} from './Pukyongosaurus.styled';

const PukyongsaurusPage = () => {
  const ttsUrl1 = '/dinosaur/tts/pukyong1.mp3';
  const ttsUrl2 = '/dinosaur/tts/pukyong2.mp3';

  return (
    <StyledpukyongsaurusPage>
      {/* absolute */}
      <StyledPukyongTitleNum>03</StyledPukyongTitleNum>
      <StyledPukyongImage1 src="/dinosaur/koDs/Pukyongosaurus_001-removebg-preview.png" alt="pukyong" />
      <StyledPukyongLottieLength>
        <Lottie animationData={DottedLine} loop autoplay />
      </StyledPukyongLottieLength>
      <StyledPukyongLengthText>15~20m</StyledPukyongLengthText>
      <StyledPukyongLottieWeight>
        <Lottie animationData={circle} loop autoplay />
      </StyledPukyongLottieWeight>
      <StyledPukyongWeightText>20~25T</StyledPukyongWeightText>

      {/* 첫번째 내용 */}
      <StyledPukyongFirstContent>
        <StyledPukongLitteTitle>
          한반도의 최초의 공룡 <TtsPaly src={ttsUrl1} />{' '}
        </StyledPukongLitteTitle>
        <StyledPukongTitle>부경고사우루스</StyledPukongTitle>
        <StyledPukongSummary>
          부경고사우루스는 전기 백악기 (1억 3600만 년 전 ~ 1억3000만 년 전)에 살았으며 한국의 경상남도 하동군에서 발견된
          초식공룡입니다. 부경고사우루스라는 이름은 발굴한 부경대학교 발굴팀에서 비롯하여 이름을 가지게 되었습니다. 긴
          목을 가졌으며 복원된 전시물은 현재 부경대학교 도서관 1층에 위치하고 있습니다.
        </StyledPukongSummary>
      </StyledPukyongFirstContent>

      {/* 두번째 내용 */}
      <StyledPukyongSizeContainer>
        <StyledPukyongSizeImgContainer>
          <StyledPukyongSizeImage1 src="/dinosaur/koDs/pukyong.png" alt="pukyongSize" />
        </StyledPukyongSizeImgContainer>
        <StyledPukyongSecondContent>
          <StyledPukongLitteTitle>
            | 부경고사우루스의 이야기 <TtsPaly src={ttsUrl2} />
          </StyledPukongLitteTitle>
          <StyledPukongSummary>
            부경대학교의 이름을 따서 공룡의 속명을 부경고사우루스 라고 정했고, 새천년이 시작되는 해에 발표했다고 해서
            종명을 천년(millenniumi) 으로 붙였습니다. 2004년 1월 클리블랜드 자연사 박물관의 공룡 목록에서 속으로는
            931번째로 등재되었습니다. 무거운 몸을 지탱하기 위하여 튼튼한 다리를 가지고 있습니다. 또한 긴 꼬리는 중심을
            잡는데 많은 역할을 했을 것입니다. 용각류인 부경고사우루스는 백악기 초기 지층에서 목뼈, 요추, 갈비뼈, 쇄골,
            미추돌기 등이 발견되었으며, 전형적인 용각류 공룡의 특징을 보여주고 있습니다. 거대한 공룡의 방어 수단은 큰
            몸집을 이용하는 것입니다. 몸집이 크고 길이가 긴 부경고사우루스는 두꺼운 다리를 가지고 있어 비교적 빠른
            이동은 하지 못했을 것으로 추정됩니다. 경상남도 지역에서 풍부하게 발견되고 있는 용각류 공룡발자국의 주인공과
            부경고사우루스와의 연관성에 대한 연구도 앞으로 보다 활발하게 진행될 예정입니다.
          </StyledPukongSummary>
        </StyledPukyongSecondContent>
      </StyledPukyongSizeContainer>
    </StyledpukyongsaurusPage>
  );
};

export default PukyongsaurusPage;
