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
import DinosaurAnimalpost from '../../../../apis/dinosaur/dinosaurAnimalPost';
import { useAnimalInfoHook } from '../../../../hooks/dinosaur/useAnimalInfoHook';

const AnimalDetail = (props: any) => {
  const DsKorName = useDinosaurStore((state: any) => state.DsKorName);
  const { animalInfo, getAnimalInfo, isRandomInfo } = useAnimalInfoHook();

  // 동물 종류
  const [isOpenSpecies, setIsOpenSpecies] = useState(false);
  const [isInfo, setIsInfo] = useState();
  const selectCountry = props.isCountry[0];
  // 포유류를 클릭하면 포유류 정보, 조류를 누르면 조류 정보

  const openSpecies = (e: any) => {
    const speciesName = e.target.id;
    if (isOpenSpecies) {
      if (speciesName !== isInfo) {
        setIsInfo(speciesName);
      } else {
        setIsOpenSpecies(!isOpenSpecies);
      }
    } else {
      setIsInfo(speciesName);
      setIsOpenSpecies(!isOpenSpecies);
    }

    getAnimalInfo(selectCountry, speciesName);
  };

  // useEffect(() => {
  //   console.log('random', isRandomInfo);
  // }, [animalInfo]);

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
                <StyledAnimalSpeciesInfo>{isRandomInfo}</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Reptilia">
              파충류 ▼
              {isOpenSpecies && isInfo === 'Reptilia' && (
                <StyledAnimalSpeciesInfo>{isRandomInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Aves">
              조류 ▼
              {isOpenSpecies && isInfo === 'Aves' && <StyledAnimalSpeciesInfo>{isRandomInfo}</StyledAnimalSpeciesInfo>}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Amphibia">
              양서류 ▼
              {isOpenSpecies && isInfo === 'Amphibia' && (
                <StyledAnimalSpeciesInfo>{isRandomInfo} 정보</StyledAnimalSpeciesInfo>
              )}
            </StyledAnimalSpecies>
            <StyledAnimalSpecies onClick={openSpecies} id="Crustacea">
              갑각류 ▼
              {isOpenSpecies && isInfo === 'Crustacea' && (
                <StyledAnimalSpeciesInfo>{isRandomInfo} 정보</StyledAnimalSpeciesInfo>
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
