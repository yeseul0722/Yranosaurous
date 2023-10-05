import React, { useState, useEffect } from 'react';
import { StyledCourseSelectConatiner, StyledCouseSelectButton } from './CourceSelect.styled';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const CourseSelect = (props: any) => {
  const selectCourse = useGuideStore((state: any) => state.selectCourse);
  const setSelectCourse = useGuideStore((state: any) => state.setSelectCourse);
  const courceList = useGuideStore((state: any) => state.courceList);
  useEffect(() => {
    if (courceList) {
      setSelectCourse(courceList[0]?.name);
      // console.log(courceList);
    }
  }, [courceList]);
  return (
    <StyledCourseSelectConatiner>
      {courceList.map((cource: any) => {
        return (
          <StyledCouseSelectButton
            key={cource.id}
            name={cource.name}
            onClick={(e: any) => setSelectCourse(e.target.name)}
            select={selectCourse}
          >
            {cource.name}
          </StyledCouseSelectButton>
        );
      })}
    </StyledCourseSelectConatiner>
  );
};

export default CourseSelect;
