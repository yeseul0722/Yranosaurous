import React, { useEffect, useState } from 'react';
import DinosaurSubGet from '../../apis/dinosaur/DinosaurSubGet';
import useDinosaurStore from '../../stores/dinosaur/useDinosaurStore';

export const useDinosaurSubHook = () => {
  const [dinosaurSubList, setDinosaurSubList] = useState<any>([]);

  const DsEngName = useDinosaurStore((state: any) => state.DsEngName);

  const getDinosaurSubList = async (DsEngName: any) => {
    const response = await DinosaurSubGet(DsEngName);
    setDinosaurSubList(response.data.response);
  };

  // 좌표
  const [isLng, setIsLng] = useState<any>([]);
  const [isLat, setIsLat] = useState<any>([]);

  useEffect(() => {
    const updatedIsLat = dinosaurSubList.reduce((preIsLat: any, dinosaur: any) => {
      if (dinosaur.decimalLatitude && !preIsLat.includes(dinosaur.decimalLatitude)) {
        return [...preIsLat, dinosaur.decimalLatitude];
      }
      return preIsLat;
    }, []);
    setIsLat(updatedIsLat);
    const updatedIsLng = dinosaurSubList.reduce((preIsLng: any, dinosaur: any) => {
      if (dinosaur.decimalLongitude && !preIsLng.includes(dinosaur.decimalLongitude)) {
        return [...preIsLng, dinosaur.decimalLongitude];
      }
      return preIsLng;
    }, []);
    setIsLng(updatedIsLng);
  }, [dinosaurSubList]);

  // 지역
  const [isCountry, setIsCountry] = useState<any>([]);

  useEffect(() => {
    const updatedIsCountry = dinosaurSubList.reduce((preIsCountry: any, dinosaur: any) => {
      if (dinosaur.country && !preIsCountry.includes(dinosaur.country)) {
        return [...preIsCountry, dinosaur.country];
      }
      return preIsCountry;
    }, []);
    setIsCountry(updatedIsCountry);
  }, [dinosaurSubList]);

  return { isLat, isLng, dinosaurSubList, getDinosaurSubList, isCountry };
};
