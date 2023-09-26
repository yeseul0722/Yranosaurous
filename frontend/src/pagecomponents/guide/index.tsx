import React, { useEffect, useState } from 'react';
import { StyledGuidePage } from './Guide.styled';
import Map from './components/kakaomap';
import SideBar from './components/sidebar';
import { useLocation } from 'react-router-dom';
import CourseSelect from './components/courseselect';
import useGuideStore from '../../stores/guide/useGuideStore';
import { useCourcesListHook } from '../../hooks/guide/useCourcesListHook';
const GuideComponent = () => {
  const path = useLocation().pathname;
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const { getCourcesList } = useCourcesListHook();
  useEffect(() => {
    getCourcesList();
  }, []);

  return (
    <StyledGuidePage>
      {selectCategory === 'cource' && <CourseSelect></CourseSelect>}
      <SideBar></SideBar>
      <Map></Map>
    </StyledGuidePage>
  );
};

export default GuideComponent;
