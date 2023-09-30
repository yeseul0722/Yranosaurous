import React, { useEffect, useState } from 'react';
import DinosaurListGet from '../../apis/dinosaur/dinosaurListGet';

export const useDinosaurListHook = () => {
  const [dinosaurList, setDinosaurList] = useState<any>([]);

  useEffect(() => {
    const getDinosaurList = async () => {
      const response = await DinosaurListGet();
      setDinosaurList(response.data.response);
    };
    getDinosaurList();
  }, []);

  return { dinosaurList };
};
