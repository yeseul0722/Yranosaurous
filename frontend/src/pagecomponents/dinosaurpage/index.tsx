import React from 'react';
import DsFirstPage from './components/firstpage';
import {
  StyledDsPage,
  StyledDsSide,
  StyledDsContent,
  StyledDsLandingPage,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
  StyledKoreaceratopsPage,
  StyledKoreasaurusPage,
  StyledPukyongsaurusPage,
} from './Dinosaur.styled';
import LandingPage from './components/landingpage';
import KoreaDsPage from './components/koreadspage';
import KoreaMapPage from './components/koreamappage';
import SidebarComponent from './components/sidebar';
import KoreaceratopsPage from './components/koreaceratopspage';
import KoreasaurusPage from './components/koreanosaurus';
import PukyongsaurusPage from './components/pukyongosaurus';

const Dinosaur = () => {
  return (
    <StyledDsPage>
      <StyledDsContent>
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
        <StyledKoreaceratopsPage>
          <KoreaceratopsPage></KoreaceratopsPage>
        </StyledKoreaceratopsPage>
        <StyledKoreasaurusPage>
          <KoreasaurusPage />
        </StyledKoreasaurusPage>
        <StyledPukyongsaurusPage>
          <PukyongsaurusPage />
        </StyledPukyongsaurusPage>
      </StyledDsContent>
    </StyledDsPage>
  );
};

export default Dinosaur;
