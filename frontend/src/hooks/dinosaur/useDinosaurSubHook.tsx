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

  return { isLat, isLng, dinosaurSubList, getDinosaurSubList };
};

// export const useDinosaurSubHook = () => {
//   const dinosaurSub = useDinosaurStore((state: any) => state.dinosaurSub);
//   const [isAppear, setIsAppear] = useState<any>([]);

//   //
//   const [isLng, setIsLng] = useState<any>([]);
//   const [isLat, setIsLat] = useState<any>([]);
//   const setDinosaurSub = useDinosaurStore((state: any) => state.setDinosaurSub);

//   const getDinosaurSub = async (DsEngName: any) => {
//     const response = await DinosaurSubGet(DsEngName);
//     setDinosaurSub(response.data.response);
//   };

//   useEffect(() => {
//     const updatedIsAppear = dinosaurSub.reduce((prevIsAppear: any, dinosaur: any) => {
//       if (!prevIsAppear.includes(dinosaur.country)) {
//         return [...prevIsAppear, dinosaur.country];
//       }
//       return prevIsAppear;
//     }, []);
//     setIsAppear(updatedIsAppear);
//   }, [dinosaurSub]);

//   ///

//   useEffect(() => {
//     const updatedIsLat = dinosaurSub.reduce((preIsLat: any, dinosaur: any) => {
//       if (dinosaur.decimalLatitude && !preIsLat.includes(dinosaur.decimalLatitude)) {
//         return [...preIsLat, dinosaur.decimalLatitude];
//       }
//       return preIsLat;
//     }, []);
//     setIsLat(updatedIsLat);
//   }, dinosaurSub);

//   useEffect(() => {
//     const updatedIsLng = dinosaurSub.reduce((preIsLng: any, dinosaur: any) => {
//       if (dinosaur.decimalLongitude && !preIsLng.includes(dinosaur.decimalLongitude)) {
//         return [...preIsLng, dinosaur.decimalLongitude];
//       }
//       return preIsLng;
//     }, []);
//     setIsLng(updatedIsLng);
//   }, [dinosaurSub]);

//   return { isAppear, getDinosaurSub, isLng, isLat };
// };
