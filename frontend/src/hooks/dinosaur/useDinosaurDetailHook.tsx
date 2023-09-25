import React, { useEffect, useState } from 'react';
import DinosaurDetailGet from '../../apis/dinosaur/dinosaurDetailGet';

export const useDinosaurDetailHook = () => {
  const [dinosaurDetail, setDinosaurDetail] = useState<any>([]);

  const getDinosaurDetail = async (dinosaurId: any) => {
    const response = await DinosaurDetailGet(dinosaurId);
    setDinosaurDetail(response.data.response);
    // console.log(response);
  };

  return { dinosaurDetail, getDinosaurDetail };
};
