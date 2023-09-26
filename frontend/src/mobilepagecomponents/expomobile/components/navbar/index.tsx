import React from 'react';
import { StyledMenuContainer, StyledServiceName, StyledNavBarContainer, StyledMenu } from './NavBar.styled';

const NavbarComponent = (props: any) => {
  return (
    <StyledNavBarContainer>
      <StyledServiceName>고성</StyledServiceName>
      <StyledServiceName>와이라노사우르스</StyledServiceName>
      <StyledServiceName>공연장 안내</StyledServiceName>
      {/* <StyledMenuContainer onClick={() => props.handleSideBar()}>
        <StyledMenu src="expo_main_pic/menu.png" alt="menu"></StyledMenu>
      </StyledMenuContainer> */}
    </StyledNavBarContainer>
  );
};

export default NavbarComponent;
