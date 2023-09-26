import React from 'react';

import { StyledMenu, StyledMenuContainer, StyledMenuText } from './RestautantMenu.styled';

const GosungRestaurantMenu = () => {
  return (
    <StyledMenuContainer>
      <StyledMenuText>Menu</StyledMenuText>
      {/* {restaurantDetail &&
        restaurantDetail.menuResponseList.map((menu: any) => <StyledMenu key={menu.id}></StyledMenu>)} */}
    </StyledMenuContainer>
  );
};

export default GosungRestaurantMenu;
