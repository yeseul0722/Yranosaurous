import React, { useEffect } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButton,
  StyledTourCategoryButtonContainer,
} from './Cource.styled';
import { useCourcesListHook } from '../../../../hooks/guide/useCourcesListHook';
import { useCourceHook } from '../../../../hooks/guide/useCourceHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';

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

  useEffect(() => {
    console.log(courseOrderList);
  });

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
      <div>
        {courseOrderList?.map((cource: any) => {
          return <div key={cource.id}>{cource.place.name}</div>;
        })}
      </div>
    </StyldTourCategoryContainer>
  );
};

export default MobileCource;
