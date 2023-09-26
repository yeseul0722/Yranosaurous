import React, { useEffect, useState } from 'react';
import { StyledGuidePage } from './Guide.styled';
import Map from '../guide/components/kakaomap';
import SideBar from './components/sidebar';
import CourseSelect from './components/courseselect';
import useGuideStore from '../../stores/guide/useGuideStore';
import { useCourcesListHook } from '../../hooks/guide/useCourcesListHook';
import { useMediaQuery } from 'react-responsive';
import GuideMobile from '../../mobilepagecomponents/guidemobile';
const GuideComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const { getCourcesList } = useCourcesListHook();
  useEffect(() => {
    getCourcesList();
  }, []);

  return (
    <>
      {!isMobile ? (
        <StyledGuidePage>
          {selectCategory === 'cource' && <CourseSelect></CourseSelect>}
          <SideBar></SideBar>
          <Map></Map>
        </StyledGuidePage>
      ) : (
        <GuideMobile></GuideMobile>
      )}
    </>
  );
};

export default GuideComponent;
