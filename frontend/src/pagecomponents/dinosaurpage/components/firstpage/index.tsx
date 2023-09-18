import React, { useState } from 'react';
import CustomGlobeComponent from '../globe';
import SidebarComponent from '../sidebar';
import DsSpeciesComponent from '../dinosaurspecies';
import {
  StyledDinosaurPage,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledSidebarContainer,
  StyledDsListButton,
} from './DsFirstPage.styled';

const DsFirstPage = () => {
  const [isOpenList, setIsOpenList] = useState(true);

  const openList = () => {
    setIsOpenList(!isOpenList);
  };

  return (
    <StyledDinosaurPage>
      <StyledSidebarContainer>
        <SidebarComponent />
      </StyledSidebarContainer>

      <StyledCustomGlobeContainer>
        <CustomGlobeComponent />
      </StyledCustomGlobeContainer>

      <StyledDinosaurListContainer>
        <StyledDsListButton onClick={openList}>Open</StyledDsListButton>
        {isOpenList && <DsSpeciesComponent />}
      </StyledDinosaurListContainer>
    </StyledDinosaurPage>
  );
};

export default DsFirstPage;
