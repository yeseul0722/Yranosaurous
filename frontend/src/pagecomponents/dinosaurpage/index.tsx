import React, { useState } from 'react';
import CustomGlobeComponent from './components/globe';
import DinosaurListComponent from './components/dinosaurlist';
import SidebarComponent from './components/sidebar';
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
      <StyledCustomGlobeContainer>
        <SidebarComponent />
      </StyledCustomGlobeContainer>

      <StyledDinosaurListContainer>
        <CustomGlobeComponent />
      </StyledDinosaurListContainer>

      {isOpenList && (
        <StyledSidebarContainer>
          <DinosaurListComponent />
        </StyledSidebarContainer>
      )}
    </StyledDinosaurPage>
  );
};

export default DinosaurComponent;
