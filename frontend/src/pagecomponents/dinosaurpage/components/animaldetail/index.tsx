import React, { useEffect, useState } from 'react';
import {
  StyldAnimalDetailWindowBorder,
  StyledAnimalBody,
  StyledAnimalCloseButton,
  StyledAnimalDetailPage,
  StyledAnimalDetailTitle,
  StyledAnimalDetailWindow,
  StyledAnimalSpecies,
  StyledAnimalSpeciesInfo,
} from './animalDetail.styled';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';

const AnimalDetail = (props: any) => {
  const DsKorName = useDinosaurStore((state: any) => state.DsKorName);

  // 동물 종류
  const [isOpenSpecies, setIsOpenSpecies] = useState(false);
  const [isInfo, setIsInfo] = useState();
  // 포유류를 클릭하면 포유류 정보, 조류를 누르면 조류 정보

  const openSpecies = (e: any) => {
    const speciesName = e.target.id;
    setIsInfo(speciesName);

    setIsOpenSpecies(!isOpenSpecies);
  };

  return (
    <StyledAnimalDetailPage>
      <StyledAnimalDetailWindow>
        <StyldAnimalDetailWindowBorder>
          <StyledAnimalBody>
            <StyledAnimalDetailTitle>
              {DsKorName}은<br /> {props.isCountry}에서 살았어요! <br />
              <br />
              현재 {props.isCountry}에는 <br />
              어떤 동물이 살고있을까요?
            </StyledAnimalDetailTitle>
            <StyledAnimalSpecies onClick={openSpecies} id="Mammalia">
              포유류 ▼
              {isOpenSpecies && isInfo === 'Mammalia' && (
                <StyledAnimalSpeciesInfo>{isInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Reptilia">
              파충류 ▼
              {isOpenSpecies && isInfo === 'Reptilia' && (
                <StyledAnimalSpeciesInfo>{isInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Aves">
              조류 ▼
              {isOpenSpecies && isInfo === 'Aves' && <StyledAnimalSpeciesInfo>{isInfo} 정보</StyledAnimalSpeciesInfo>}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Amphibia">
              양서류 ▼
              {isOpenSpecies && isInfo === 'Amphibia' && (
                <StyledAnimalSpeciesInfo>{isInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Crustacea">
              갑각류 ▼
              {isOpenSpecies && isInfo === 'Crustacea' && (
                <StyledAnimalSpeciesInfo>{isInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
          </StyledAnimalBody>
          <StyledAnimalCloseButton onClick={props.closeAnimal}>X</StyledAnimalCloseButton>
        </StyldAnimalDetailWindowBorder>
      </StyledAnimalDetailWindow>
    </StyledAnimalDetailPage>
  );
};

export default AnimalDetail;
