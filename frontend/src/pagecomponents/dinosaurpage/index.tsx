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
      <StyledSidebarContainer>
        <SidebarComponent />
      </StyledSidebarContainer>

      <StyledCustomGlobeContainer>
        <CustomGlobeComponent />
      </StyledCustomGlobeContainer>

      {isOpenList && (
        <StyledDinosaurListContainer>
          <DinosaurListComponent />
        </StyledDinosaurListContainer>
      )}
    </StyledDinosaurPage>
  );
};

export default DinosaurComponent;
