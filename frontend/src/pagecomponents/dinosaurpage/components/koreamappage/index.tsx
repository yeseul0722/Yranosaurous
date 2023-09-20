import React from 'react';
// import { ReactComponent as SouthKorea } from '@svg-maps/south-korea/south-korea.svg';
import { ReactComponent as SouthKorea } from './south-korea.svg';
import Lottie from 'lottie-react';
import { arrow } from '../lottie';
import KoreaMap from '../koreamap';
import {
  StyledKoreaMapPage,
  StyledKoreaMapContent,
  StyledKoreaMapTitleText,
  StyledKoreaMapText,
  StyledKoreaMap,
  StyledKoreaMapImg,
  StyledKoreaMapDs,
  StyledKoreaMapDsName,
} from './koreaMapPage.styled';

const KoreaMapPage = () => {
  return (
    <StyledKoreaMapPage>
      <StyledKoreaMapContent>
        <StyledKoreaMapTitleText>한국의 공룡</StyledKoreaMapTitleText>
        <StyledKoreaMapText>
          한국에서도 <br /> 세 종류의 공룡🦕이 살았어요!
        </StyledKoreaMapText>
      </StyledKoreaMapContent>
      <StyledKoreaMap>
        <KoreaMap></KoreaMap>
        <StyledKoreaMapDs>
          <StyledKoreaMapDsName>경기도</StyledKoreaMapDsName>
          {/* <StyledKoreaMapImg src="./arrow.json"></StyledKoreaMapImg> */}
          <Lottie animationData={arrow} />
        </StyledKoreaMapDs>
      </StyledKoreaMap>
    </StyledKoreaMapPage>
  );
};

export default KoreaMapPage;
