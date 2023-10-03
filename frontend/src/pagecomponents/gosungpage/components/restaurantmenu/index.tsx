import React from 'react';

import { StyledMenu, StyledMenuContainer, StyledMenuName, StyledMenuText, StyledPrice } from './RestautantMenu.styled';

interface GosungRestaurantDetailProps {
  restaurantDetail: { menuResponseList: any[] };
}

const GosungRestaurantMenu = ({ restaurantDetail }: GosungRestaurantDetailProps) => {
  return (
    <StyledMenuContainer>
      <StyledMenuText>Menu</StyledMenuText>
      {restaurantDetail.menuResponseList &&
        restaurantDetail.menuResponseList.map((menu: any) => (
          <StyledMenu key={menu.id}>
            <StyledMenuName>{menu.name}</StyledMenuName>
            <StyledPrice>{menu.price}</StyledPrice>
          </StyledMenu>
        ))}
    </StyledMenuContainer>
  );
};

export default GosungRestaurantMenu;
