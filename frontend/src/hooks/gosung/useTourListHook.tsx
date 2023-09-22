import React, { useState, useEffect } from 'react';
import TourListGet from '../../apis/tour/tourListGet';

const useTourListHook = () => {
  const [tourList, setTourList] = useState();
  useEffect(() => {
    const getTourList = async () => {
      const response = await TourListGet();
      setTourList(response.data.response);
    };
    getTourList();
  }, []);
  return { tourList };
};

export default useTourListHook;
