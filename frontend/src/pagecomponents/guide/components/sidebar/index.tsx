import React, { useState } from 'react';
import { StyledSideBarContainer, StyledMenu, StyledMenuIcon, StyledSideBar, StyledMenuTitle } from './SideBar.styled';
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
          <StyledMenuIcon name="home"></StyledMenuIcon>
        </StyledMenu>
        <StyledMenu name="cource" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon name="cource" alt="menuB" state={selectCategory}></StyledMenuIcon>
          <StyledMenuTitle>추천코스</StyledMenuTitle>
        </StyledMenu>
        <StyledMenu name="facility" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon name="facility" alt="menuB" state={selectCategory}></StyledMenuIcon>
          <StyledMenuTitle>편의시설</StyledMenuTitle>
        </StyledMenu>
        <StyledMenu name="preview" state={selectCategory} onClick={handelState}>
          <StyledMenuIcon name="preview" alt="menuB" state={selectCategory}></StyledMenuIcon>
          <StyledMenuTitle>관람요소</StyledMenuTitle>
        </StyledMenu>
      </StyledSideBar>
      {selectCategory === 'cource' && <Cource></Cource>}
      {selectCategory === 'facility' && <Facility></Facility>}
      {selectCategory === 'preview' && <Preview></Preview>}
    </StyledSideBarContainer>
  );
};

export default SideBarComponent;
