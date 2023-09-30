import React, { useState, useRef } from 'react';
import KoreaMap from '../koreamap';
import BgDinosaur from '../../lottie/walkds.json';
import Lottie from 'lottie-react';
import koreanosaurus from '../../lottie/bluecircle.json';
import koreaceratops from '../../lottie/bluecircle.json';
import pukyongosaurus from '../../lottie/bluecircle.json';

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
  StyledKoreaMapBackgroundLottie,
  StyledDsPage,
} from './koreaMapPage.styled';
import KoreasaurusPage from '../koreanosaurus';
import KoreaceratopsPage from '../koreaceratopspage';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';
import PukyongsaurusPage from '../pukyongosaurus';

const KoreaMapPage = () => {
  const [selectDsName, setSelectDsName] = useState();
  const [selectDsHover, setSelectDsHover] = useState();

  // 공룡 이름 클릭시 해당 공룡 상세페이지로 이동
  const goKoreaSaursInput = useRef<any>();
  const goKoreaSaurs = () => {
    goKoreaSaursInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const goKoreaCeratopsInput = useRef<any>();
  const goKoreaCeratops = () => {
    goKoreaCeratopsInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const goPukyongInput = useRef<any>();
  const goPukyong = () => {
    goPukyongInput.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const selectDs = (e: any) => {
    setSelectDsName(e.target.id);
    setSelectDsHover(e.target.id);
  };

  return (
    <StyledKoreaMapPage selectDsName={selectDsName}>
      {/* 지도 1페이지 */}
      <StyledKoreaMapContent>
        <StyledKoreaMapTitleText>한국의 공룡</StyledKoreaMapTitleText>
        <StyledKoreaMapText>
          한국에서도 <br /> 공룡이 세 종류나 발견되었어요!
        </StyledKoreaMapText>

        {/* 공룡 선택 */}
        {/* 보성 */}
        <StyledKoreaMapSelect id="koreanosaurus" onMouseOver={selectDs} onClick={goKoreaSaurs}>
          <StyledKoreaMapSelectNumber id="koreanosaurus">01</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreanosaurus">
            <StyledKoreaMapSelectTitle id="koreanosaurus">
              코리아노사우루스 보성엔시스 {selectDsHover === 'koreanosaurus' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreanosaurus">최초의 한국의 이름을 가진 공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 화성 */}
        <StyledKoreaMapSelect id="koreaceratops" onMouseOver={selectDs} onClick={goKoreaCeratops}>
          <StyledKoreaMapSelectNumber id="koreaceratops">02</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreaceratops">
            <StyledKoreaMapSelectTitle id="koreaceratops">
              코리아케라톱스 화성엔시스 {selectDsHover === 'koreaceratops' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreaceratops">한국의 뿔공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 하동 */}
        <StyledKoreaMapSelect id="pukyongosaurus" onMouseOver={selectDs} onClick={goPukyong}>
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
      <StyledKoreaMapSelectLottie selectDsName={selectDsName}>
        <Lottie animationData={koreanosaurus} loop autoplay />
      </StyledKoreaMapSelectLottie>

      {/* 2페이지 - 코리아노사우루스 */}
      <StyledDsPage ref={goKoreaSaursInput}>
        <KoreasaurusPage></KoreasaurusPage>
      </StyledDsPage>

      {/* 3페이지 - 코리아케라톱스 */}
      <StyledDsPage ref={goKoreaCeratopsInput}>
        <KoreaceratopsPage />
      </StyledDsPage>

      {/* 4페이지 - 부경고사우루스 */}
      <StyledDsPage ref={goPukyongInput}>
        <PukyongsaurusPage />
      </StyledDsPage>
    </StyledKoreaMapPage>
  );
};

export default KoreaMapPage;
