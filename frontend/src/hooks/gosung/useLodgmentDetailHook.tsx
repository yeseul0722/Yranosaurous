import { useState } from 'react';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';
import lodgmentDetailGet from '../../apis/lodgment/lodgmentDetailGet';

export const useLodgmentDetailHook = () => {
  const setLodgmentDetail = useGosungListStore((state: any) => state.setLodgmentDetail);
  const getLodgmentDetail = async (id: any) => {
    const res = await lodgmentDetailGet(id);
    setLodgmentDetail(res.data.response);
  };
  return { getLodgmentDetail };
};
