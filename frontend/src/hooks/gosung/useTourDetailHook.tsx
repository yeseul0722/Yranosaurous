import { async } from 'q';
import { useState } from 'react';
import tourDetailGet from '../../apis/tour/tourDetailGet';

export const useTourDetailHook = () => {
  const [tourDetail, setTourDetail] = useState();
  const getTourDetail = async (tourId: any) => {
    const res = await tourDetailGet(tourId);
    console.log(res);
  };
  return { tourDetail, getTourDetail };
};
