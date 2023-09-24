import { useState } from 'react';
import tourDetailGet from '../../apis/tour/tourDetailGet';
import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';

export const useTourDetailHook = () => {
  const setTourDetail = useGosungListStore((state: any) => state.setTourDetail);
  const getTourDetail = async (tourId: any) => {
    const res = await tourDetailGet(tourId);
    setTourDetail(res.data.response);
    console.log(res.data.response);
  };
  return { getTourDetail };
};
