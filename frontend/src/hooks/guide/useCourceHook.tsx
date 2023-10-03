import useGuideStore from '../../stores/guide/useGuideStore';
import React, { useState, useEffect } from 'react';
export const useCourceHook = () => {
  const selectCourse = useGuideStore((state: any) => state.selectCourse);
  const courceList = useGuideStore((state: any) => state.courceList);
  const setPositions = useGuideStore((state: any) => state.setPositions);
  const resetPositions = useGuideStore((state: any) => state.resetPositions);
  const cource = courceList.filter((cource: any) => {
    return cource.name === selectCourse;
  });
  const courseOrderList = cource[0]?.courseOrderList;

  useEffect(() => {
    resetPositions();
    courseOrderList?.map((place: any) => {
      const position = {
        markerNumber: place.place.markerNumber,
        latlng: {
          lat: place.place.latitude,
          lng: place.place.longitude,
        },
        title: place.place.name,
        sequence: place.sequence,
        imgAddress: place.imgAddress,
        id: place.id,
      };
      setPositions(position);
    });
  }, [courseOrderList]);

  return { courceList, cource, courseOrderList };
};
