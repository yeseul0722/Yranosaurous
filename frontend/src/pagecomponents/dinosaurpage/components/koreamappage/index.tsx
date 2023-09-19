import React from 'react';
// import { ReactComponent as SouthKorea } from '@svg-maps/south-korea/south-korea.svg';
import { ReactComponent as SouthKorea } from './south-korea.svg';
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
        {/* <SouthKorea width={500} height={630} /> */}
        <KoreaMap></KoreaMap>
        {/* <StyledKoreaMapDsName>공룡</StyledKoreaMapDsName> */}
        <StyledKoreaMapDs>
          <StyledKoreaMapDsName>경기도</StyledKoreaMapDsName>
        </StyledKoreaMapDs>
      </StyledKoreaMap>
    </StyledKoreaMapPage>
  );
};

export default KoreaMapPage;
