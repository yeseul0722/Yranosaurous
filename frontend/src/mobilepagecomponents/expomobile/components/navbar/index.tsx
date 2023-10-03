import React from 'react';
import {
  StyledMenuContainer,
  StyledServiceName,
  StyledNavBarContainer,
  StyledMenu,
  StyledRightMenu,
} from './NavBar.styled';

const NavbarComponent = (props: any) => {
  return (
    <StyledNavBarContainer>
      <StyledMenuContainer>
        <StyledMenu src="mobile/mainlogodark.png" alt="menu"></StyledMenu>
      </StyledMenuContainer>
      <StyledRightMenu>
        <StyledServiceName href="/Guide">Expo</StyledServiceName>
        <StyledServiceName href="/Gosung">고성</StyledServiceName>
      </StyledRightMenu>
    </StyledNavBarContainer>
  );
};

export default NavbarComponent;
