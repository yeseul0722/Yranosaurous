import React, { useState } from 'react';
import CustomGlobeComponent from './components/globe';
import SidebarComponent from './components/sidebar';
import DsSpeciesComponent from './components/dinosaurspecies';
import {
  StyledDinosaurPage,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledSidebarContainer,
  StyledDsListButton,
} from './Dinosaur.styled';

const DinosaurComponent = () => {
  const [isOpenList, setIsOpenList] = useState(true);

  const openList = () => {
    // console.log('open');
    if (isOpenList === true) {
      setIsOpenList(false);
      console.log(isOpenList);
    } else {
      setIsOpenList(true);
      console.log(isOpenList);
    }
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

export default DinosaurComponent;
