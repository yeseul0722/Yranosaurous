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
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';

// const KoreaMapPage = ({ land }: { land: any }) => {
const KoreaMapPage = () => {
  // 공룡 이름 클릭시 해당 공룡 상세페이지로 이동
  const inputForm = useRef<any>();
  const goDsPage = () => {
    inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [selectDsName, setSelectDsName] = useState();
  const [selectDsHover, setSelectDsHover] = useState();

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
        <StyledKoreaMapSelect id="koreanosaurus" onMouseOver={selectDs} onClick={goDsPage}>
          <StyledKoreaMapSelectNumber id="koreanosaurus">01</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreanosaurus">
            <StyledKoreaMapSelectTitle id="koreanosaurus">
              코리아노사우루스 보성엔시스 {selectDsHover === 'koreanosaurus' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreanosaurus">최초의 한국의 이름을 가진 공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 화성 */}
        <StyledKoreaMapSelect id="koreaceratops" onMouseOver={selectDs} onClick={goDsPage}>
          <StyledKoreaMapSelectNumber id="koreaceratops">02</StyledKoreaMapSelectNumber>
          <StyledKoreaMApSelectContentBox id="koreaceratops">
            <StyledKoreaMapSelectTitle id="koreaceratops">
              코리아케라톱스 화성엔시스 {selectDsHover === 'koreaceratops' && '◀'}
            </StyledKoreaMapSelectTitle>
            <StyledKoreaMapSelectText id="koreaceratops">한국의 뿔공룡</StyledKoreaMapSelectText>
          </StyledKoreaMApSelectContentBox>
        </StyledKoreaMapSelect>

        {/* 하동 */}
        <StyledKoreaMapSelect id="pukyongosaurus" onMouseOver={selectDs} onClick={goDsPage}>
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
      <StyledDsPage ref={inputForm}>
        <KoreasaurusPage></KoreasaurusPage>
      </StyledDsPage>
    </StyledKoreaMapPage>
  );
};

export default KoreaMapPage;
