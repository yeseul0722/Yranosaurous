import React, { useState } from 'react';
import { StyledSideBarContainer, StyledMenu, StyledMenuIcon, StyledSideBar, StyledMenuTitle } from './SideBar.styled';
import { useNavigate } from 'react-router-dom';

import Facility from '../facility';
import Cource from '../cource';
import Preview from '../preview';
const SideBarComponent = () => {
  const Router = useNavigate();
  const [state, setState] = useState('');
  const handelState = (e: any) => {
    if (state === e.target.getAttribute('name')) {
      setState('');
    } else {
      setState(e.target.getAttribute('name'));
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
        <StyledMenu name="cource" state={state} onClick={handelState}>
          <StyledMenuIcon name="cource" alt="menuB" state={state}></StyledMenuIcon>
          <StyledMenuTitle>추천코스</StyledMenuTitle>
        </StyledMenu>
        <StyledMenu name="facility" state={state} onClick={handelState}>
          <StyledMenuIcon name="facility" alt="menuB" state={state}></StyledMenuIcon>
          <StyledMenuTitle>편의시설</StyledMenuTitle>
        </StyledMenu>
        <StyledMenu name="preview" state={state} onClick={handelState}>
          <StyledMenuIcon name="preview" alt="menuB" state={state}></StyledMenuIcon>
          <StyledMenuTitle>관람요소</StyledMenuTitle>
        </StyledMenu>
      </StyledSideBar>
      {state === 'cource' && <Cource></Cource>}
      {state === 'facility' && <Facility></Facility>}
      {state === 'preview' && <Preview></Preview>}
    </StyledSideBarContainer>
  );
};

export default SideBarComponent;
