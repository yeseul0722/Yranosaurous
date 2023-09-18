import React from 'react';
import DsFirstPage from './components/firstpage';
import { StyledDsPage, StyledDsLandingPage, StyledDsFirstPage } from './Dinosaur.styled';
import LandingPage from './components/landingpage';

const Dinosaur = () => {
  return (
    <StyledDsPage>
      <StyledDsLandingPage>
        <LandingPage></LandingPage>
      </StyledDsLandingPage>
      <StyledDsFirstPage>
        <DsFirstPage></DsFirstPage>
      </StyledDsFirstPage>
    </StyledDsPage>
  );
};

export default Dinosaur;
