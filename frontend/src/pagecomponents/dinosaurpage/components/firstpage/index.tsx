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
  const [isOpenList, setIsOpenList] = useState(false);

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
        <StyledDsListButton onClick={openList}>세계의 공룡</StyledDsListButton>
        {isOpenList && <DsSpeciesComponent />}
      </StyledDinosaurListContainer>
    </StyledDinosaurPage>
  );
};

export default DsFirstPage;
