import React, { useState } from 'react';
import {
  StyledSideBarContainer,
  StyledMenu,
  StyledMenuIcon,
  StyledSideBar,
  StyledMenuTitle,
  StyledMenuIcon2,
} from './SideBar.styled';
import { useNavigate } from 'react-router-dom';

import Facility from '../facility';
import Cource from '../cource';
import Preview from '../preview';
import useGuideStore from '../../../../stores/guide/useGuideStore';
const SideBarComponent = () => {
  const Router = useNavigate();
  const selectCategory = useGuideStore((state: any) => state.selectCategory);
  const setSelectCategory = useGuideStore((state: any) => state.setSelectCategory);

  const handelState = (e: any) => {
    if (selectCategory === e.target.getAttribute('name')) {
      setSelectCategory('');
    } else {
      setSelectCategory(e.target.getAttribute('name'));
    }
  };
  return (
    <StyledSideBarContainer>
      <StyledSideBar>
        <StyledMenu
          name="home"
          onClick={() => {
            Router('/Expo');
          }}
        >
          <StyledMenuIcon2 name="home" src="/gosung/dinosaur.png"></StyledMenuIcon2>
        </StyledMenu>
        <StyledMenu name="cource" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon name="cource" alt="menuB" src="/mobile/추천코스.png" state={selectCategory}></StyledMenuIcon>
          추천코스
        </StyledMenu>
        <StyledMenu name="facility" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon
            name="facility"
            alt="menuB"
            src="/mobile/편의시설.png"
            state={selectCategory}
          ></StyledMenuIcon>
          편의시설
        </StyledMenu>
        <StyledMenu name="preview" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon name="preview" alt="menuB" src="/mobile/관람요소.png" state={selectCategory}></StyledMenuIcon>
          관람요소
        </StyledMenu>
      </StyledSideBar>
      {selectCategory === 'cource' && <Cource></Cource>}
      {selectCategory === 'facility' && <Facility></Facility>}
      {selectCategory === 'preview' && <Preview></Preview>}
    </StyledSideBarContainer>
  );
};

export default SideBarComponent;
