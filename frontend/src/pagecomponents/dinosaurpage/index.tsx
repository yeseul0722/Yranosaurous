import React, { useRef } from 'react';
import DsFirstPage from './components/firstpage';
import {
  StyledDsPage,
  StyledDsSide,
  StyledDsContent,
  StyledDsLandingPage,
  StyledLandingGoNextPageButton,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
  StyledKoreaceratopsPage,
  StyledKoreasaurusPage,
  StyledPukyongsaurusPage,
  StyledGoGosung,
} from './Dinosaur.styled';
import LandingPage from './components/landingpage';
import KoreaDsPage from './components/koreadspage';
import KoreaMapPage from './components/koreamappage';
import { useNavigate } from 'react-router-dom';
import KoreaceratopsPage from './components/koreaceratopspage';

const Dinosaur = () => {
  const inputForm = useRef<any>();
  const landingToNext = () => {
    inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigate = useNavigate();
  const goGosung = () => {
    navigate('/Expo');
  };

  return (
    <StyledDsPage>
      {/* absoulute */}
      <StyledGoGosung src="/dinosaur/dinosaur.png" alt="" onClick={goGosung} />

      <StyledDsContent>
        <StyledDsFirstPage ref={inputForm}>
          <DsFirstPage></DsFirstPage>
        </StyledDsFirstPage>
        <StyledKoreaDsPage>
          <KoreaDsPage></KoreaDsPage>
        </StyledKoreaDsPage>
        <StyledKoreaMapPage>
          <KoreaMapPage></KoreaMapPage>
        </StyledKoreaMapPage>
        {/* <StyledKoreaceratopsPage>
          <KoreaceratopsPage />
        </StyledKoreaceratopsPage> */}
      </StyledDsContent>
    </StyledDsPage>
  );
};

export default Dinosaur;
