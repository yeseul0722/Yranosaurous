import React from 'react';
import DsFirstPage from './components/firstpage';
import {
  StyledDsPage,
  StyledDsLandingPage,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
} from './Dinosaur.styled';
import LandingPage from './components/landingpage';
import KoreaDsPage from './components/koreadspage';
import KoreaMapPage from './components/koreamappage';

const Dinosaur = () => {
  return (
    <StyledDsPage>
      <StyledDsLandingPage>
        <LandingPage></LandingPage>
      </StyledDsLandingPage>
      <StyledDsFirstPage>
        <DsFirstPage></DsFirstPage>
      </StyledDsFirstPage>
      <StyledKoreaDsPage>
        <KoreaDsPage></KoreaDsPage>
      </StyledKoreaDsPage>
      <StyledKoreaMapPage>
        <KoreaMapPage></KoreaMapPage>
      </StyledKoreaMapPage>
    </StyledDsPage>
  );
};

export default Dinosaur;
