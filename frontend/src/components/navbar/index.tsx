import { useState } from 'react';
import { StyledNavBar, StyledLogoContainer, StyledLogo, StyledEndComponent, StyledLinkText } from './Navbar.styled';

const NavBarComponent = ({ currentPage }: any) => {
  const [navState, setNavState] = useState('');
  const onMouseEnter = (e: any) => {
    setNavState(e.target.name);
  };
  const onMouseLeave = (e: any) => {
    setNavState('');
  };

  return (
    <StyledNavBar currentPage={currentPage}>
      <StyledLogoContainer>
        {currentPage === 'ExpoPage' ? (
          <StyledLogo src="/mobile/mainlogodark.png" alt="Logo" />
        ) : (
          <StyledLogo src="/mobile/mainlogo.png" alt="Logo" />
        )}
        {/* <StyledName>와이라노사우르스</StyledName> */}
      </StyledLogoContainer>
      <StyledEndComponent>
        <StyledLinkText
          currentPage={currentPage}
          name="expo"
          href="/Guide"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Expo
        </StyledLinkText>
        <StyledLinkText
          currentPage={currentPage}
          name="tour"
          href="/Gosung"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          고성관광
        </StyledLinkText>
        <StyledLinkText
          currentPage={currentPage}
          name="dino"
          href="/Dinosaur"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          공룡
        </StyledLinkText>
      </StyledEndComponent>
    </StyledNavBar>
  );
};

export default NavBarComponent;
