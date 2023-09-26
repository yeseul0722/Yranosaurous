import courcesListGet from '../../apis/guide/courcesListGet';
import react, { useState } from 'react';
import useGuideStore from '../../stores/guide/useGuideStore';
export const useCourcesListHook = () => {
  // const [courceList, setCourcelist] = useState();
  const setCourcelist = useGuideStore((state: any) => state.setCourcelist);
  const getCourcesList = async () => {
    const res = await courcesListGet();
    setCourcelist(res.data.response);
  };
  return { getCourcesList };
};
