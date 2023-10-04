import React, { useEffect, useState } from 'react';
import DinosaurAnimalpost from '../../apis/dinosaur/dinosaurAnimalPost';

export const useAnimalInfoHook = () => {
  const [animalInfo, setAnimalInfo] = useState<any>([]);

  const getAnimalInfo = async (country: any, higherClass: any) => {
    const response = await DinosaurAnimalpost(country, higherClass);
    setAnimalInfo(response.data.response);
  };

  const [isRandomInfo, setIsRandomInfo] = useState<any>([]);

  // 랜덤으로 뽑을 개수
  const randomIndex = Math.floor(Math.random() * animalInfo.length);
  //   const randomValue = animalInfo[randomIndex];
  const randomValue = animalInfo[1];
  useEffect(() => {
    if (randomValue) {
      if (randomValue.scientificName) {
        setIsRandomInfo(randomValue.scientificName);
        console.log('있음', randomValue);
      }
    } else {
      setIsRandomInfo('없음');
      console.log('없음');
    }
  }, [animalInfo]);

  useEffect(() => {
    console.log('훅', isRandomInfo);
  }, [isRandomInfo]);

  return { animalInfo, getAnimalInfo, isRandomInfo };
};
