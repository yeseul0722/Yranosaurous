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
} from './Dinosaur.styled';
import LandingPage from './components/landingpage';
import KoreaDsPage from './components/koreadspage';
import KoreaMapPage from './components/koreamappage';
import SidebarComponent from './components/sidebar';
import KoreaceratopsPage from './components/koreaceratopspage';

const Dinosaur = () => {
  return (
    <StyledDsPage>
      <StyledDsSide>
        <SidebarComponent></SidebarComponent>
      </StyledDsSide>
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
      </StyledDsContent>
    </StyledDsPage>
  );
};

export default Dinosaur;
