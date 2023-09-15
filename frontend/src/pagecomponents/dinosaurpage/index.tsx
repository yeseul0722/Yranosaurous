import React, { useState } from 'react';
import CustomGlobeComponent from './components/globe';
import SidebarComponent from './components/sidebar';
import DsSpeciesComponent from './components/dinosaurspecies';
import {
  StyledDinosaurPage,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledSidebarContainer,
} from './Dinosaur.styled';

const DinosaurComponent = () => {
  const [isOpenList, setIsOpenList] = useState(true);

  return (
    <StyledDinosaurPage>
      <StyledSidebarContainer>
        <SidebarComponent />
      </StyledSidebarContainer>

      <StyledCustomGlobeContainer>
        <CustomGlobeComponent />
      </StyledCustomGlobeContainer>

      {isOpenList && (
        <StyledDinosaurListContainer>
          <DsSpeciesComponent />
        </StyledDinosaurListContainer>
      )}
      {/* <DsSpeciesComponent /> */}
    </StyledDinosaurPage>
  );
};

export default DinosaurComponent;
