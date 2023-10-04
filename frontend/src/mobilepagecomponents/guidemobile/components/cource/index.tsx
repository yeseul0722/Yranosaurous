import React, { useEffect } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
} from './Cource.styled';
import { useCourcesListHook } from '../../../../hooks/guide/useCourcesListHook';
import { useCourceHook } from '../../../../hooks/guide/useCourceHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';
import {
  StyledMobileFacility,
  StyledMobileFacilityContainer,
  StyledMobileFacilityImage,
  StyledMobileFacilityImageContainer,
  StyledMoblilFacilitySelectContainer,
  Test,
} from '../facility/Facility.styled';

const MobileCource = () => {
  const { getCourcesList } = useCourcesListHook();
  const { courceList, cource, courseOrderList } = useCourceHook();
  const selectCourse = useGuideStore((state: any) => state.selectCourse);
  const setSelectCourse = useGuideStore((state: any) => state.setSelectCourse);
  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
    'drawing',
    'bridge',
  ];
  useEffect(() => {
    getCourcesList();
  }, []);

  // useEffect(() => {
  //   console.log(courseOrderList);
  // });

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        {courceList.map((cource: any) => {
          return (
            <StyledTourCategoryButton
              key={cource.id}
              name={cource.name}
              onClick={(e: any) => setSelectCourse(e.target.name)}
              select={selectCourse}
            >
              {cource.name}
            </StyledTourCategoryButton>
          );
        })}
      </StyledTourCategoryButtonContainer>
      <div style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {courseOrderList?.map((cource: any) => {
          return (
            <StyledMoblilFacilitySelectContainer key={cource.id}>
              <Test>
                <StyledMobileFacilityImageContainer>
                  <StyledMobileFacilityImage
                    marker={imageArray[cource.place.markerNumber - 1]}
                  ></StyledMobileFacilityImage>
                </StyledMobileFacilityImageContainer>
                <StyledMobileFacilityContainer>
                  <StyledMobileFacility>{cource.place.name}</StyledMobileFacility>
                </StyledMobileFacilityContainer>
              </Test>
            </StyledMoblilFacilitySelectContainer>
          );
        })}
      </div>
    </StyldTourCategoryContainer>
  );
};

export default MobileCource;
