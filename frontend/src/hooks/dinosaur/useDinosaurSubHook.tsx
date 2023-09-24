import React, { useEffect, useState } from 'react';
import DinosaurSubGet from '../../apis/dinosaur/DinosaurSubGet';
import useDinosaurStore from '../../stores/dinosaur/useDinosaurStore';

export const useDinosaurSubHook = () => {
  // const [dinosaurSub, setDinosaurSub] = useState<any>([]);

  const setDinosaurSub = useDinosaurStore((state: any) => state.setDinosaurSub);
  const getDinosaurSub = async (DsEngName: any) => {
    // console.log(3);
    const response = await DinosaurSubGet(DsEngName);
    setDinosaurSub(response.data.response);
    // console.log('res', response);
  };

  return { getDinosaurSub };
};
