import React, { useState } from 'react';
import CustomGlobeComponent from '../globe';
import DsSpeciesComponent from '../dinosaurspecies';
import {
  StyledDinosaurPage,
  StyledMainTitle,
  StyledCustomGlobeContainer,
  StyledDinosaurListContainer,
  StyledDsListButton,
} from './DsFirstPage.styled';

const DsFirstPage = (props: any) => {
  const [isOpenList, setIsOpenList] = useState(true);

  const openList = () => {
    setIsOpenList(!isOpenList);
  };

  return (
    <StyledDinosaurPage>
      <StyledMainTitle>
        세계의 공룡들, <br /> 어디에서 살았을까요?
      </StyledMainTitle>
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
