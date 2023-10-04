import React, { useState, useRef } from 'react';
import KoreaMap from '../koreamap';
import Lottie from 'lottie-react';
import koreanosaurus from '../../lottie/bluecircle.json';

import {
  StyledKoreaMapPage,
  StyledKoreaMapContent,
  StyledKoreaMapTitleText,
  StyledKoreaMapText,
  StyledKoreaMapSelect,
  StyledKoreaMapSelectTitle,
  StyledKoreaMapSelectText,
  StyledKoreaMapSelectNumber,
  StyledKoreaMApSelectContentBox,
  StyledKoreaMapSelectLottie,
  StyledKoreaMap,
  StyledDsPageContainer,
  StyledDsSelectNumBox,
} from './koreaMapPage.styled';
import KoreasaurusPage from '../koreanosaurus';
import KoreaceratopsPage from '../koreaceratopspage';
import PukyongsaurusPage from '../pukyongosaurus';

const KoreaMapPage = () => {
  const [selectDsName, setSelectDsName] = useState();
  const [selectDsHover, setSelectDsHover] = useState();

  // 클릭시 아래 컴포넌트 변경
  const [selectShowDs, setSelectShowDs] = useState();
  const goShowDsInput = useRef<any>();
  const goKoreaInput = useRef<any>();

  const selectShow = (e: any) => {
    setSelectShowDs(e.target.id);
    if (goShowDsInput.current) {
      goShowDsInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goKorea = () => {
    goKoreaInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const selectDs = (e: any) => {
    setSelectDsName(e.target.id);
    setSelectDsHover(e.target.id);
  };

  return (
    <StyledKoreaMapPage selectDsName={selectDsName} ref={goKoreaInput}>
      {/* 지도 1페이지 */}
      <StyledKoreaMapContent>
        <StyledKoreaMapTitleText>한국의 공룡</StyledKoreaMapTitleText>
        <StyledKoreaMapText>
          한국에서도 <br /> 공룡이 세 종류나 발견되었어요!
        </StyledKoreaMapText>

        {/* 공룡 선택 */}
        {/* 보성 */}
        <StyledKoreaMapSelect id="koreanosaurus" onMouseOver={selectDs} onClick={selectShow}>
          <StyledKoreaMapSelectNumber id="koreanosaurus">01</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreanosaurus">
            <StyledKoreaMapSelectTitle id="koreanosaurus">
              코리아노사우루스 보성엔시스 {selectDsHover === 'koreanosaurus' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreanosaurus">최초의 한국의 이름을 가진 공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 화성 */}
        <StyledKoreaMapSelect id="koreaceratops" onMouseOver={selectDs} onClick={selectShow}>
          <StyledKoreaMapSelectNumber id="koreaceratops">02</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreaceratops">
            <StyledKoreaMapSelectTitle id="koreaceratops">
              코리아케라톱스 화성엔시스 {selectDsHover === 'koreaceratops' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreaceratops">한국의 뿔공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 하동 */}
        <StyledKoreaMapSelect id="pukyongosaurus" onMouseOver={selectDs} onClick={selectShow}>
          <StyledKoreaMapSelectNumber id="pukyongosaurus">03</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="pukyongosaurus">
            <StyledKoreaMapSelectTitle id="pukyongosaurus">
              부경고사우루스 {selectDsHover === 'pukyongosaurus' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="pukyongosaurus">한국의 첫 공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>
      </StyledKoreaMapContent>
      <StyledKoreaMap>
        <KoreaMap></KoreaMap>
      </StyledKoreaMap>

      {/* Lottie */}
      <StyledKoreaMapSelectLottie selectDsName={selectDsName}>
        <Lottie animationData={koreanosaurus} loop autoplay />
      </StyledKoreaMapSelectLottie>

      {/* 공룡 상세페이지 */}
      {selectShowDs && (
        <StyledDsPageContainer ref={goShowDsInput}>
          <StyledDsSelectNumBox id="koreanosaurus" onClick={goKorea}>
            | 한국의 공룡
          </StyledDsSelectNumBox>
          {selectShowDs === 'koreanosaurus' && <KoreasaurusPage />}
          {selectShowDs === 'koreaceratops' && <KoreaceratopsPage />}
          {selectShowDs === 'pukyongosaurus' && <PukyongsaurusPage />}
        </StyledDsPageContainer>
      )}
    </StyledKoreaMapPage>
  );
};

export default KoreaMapPage;
