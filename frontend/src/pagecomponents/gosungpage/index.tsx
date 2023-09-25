import React, { useState, useEffect } from 'react';
import GosungKakaoMapComponent from './components/kakaomap';
import GosungSideBar from './components/sidebar';
import { StyledSideBarContainer, StyledGosungPage, StyledSideBarParent } from './Gosung.styled';
import GosungSideList from './components/sidelist';
import GosungCloseButton from '../../components/closebutton';
import GosungCategory from './components/foodcategory';
import GosungRestaurantDetail from './components/restaurantdetail';
import { useRestaurantDetailStore } from '../../stores/restaurants/useRestaurantDetailApiStore';
import { useMediaQuery } from 'react-responsive';
import GosungMobile from '../../mobilepagecomponents/gosungmobile';

const GosungComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const [showSideList, setShowSideList] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowSideList(!showSideList);
    setShowDetails(false);
  };

  const { restaurantDetail } = useRestaurantDetailStore();
  console.log(restaurantDetail, 'index');

  useEffect(() => {
    if (Object.keys(restaurantDetail).length > 0) {
      setShowDetails(true);
    }
  }, [restaurantDetail]);

  console.log(showDetails);

  return (
    <>
      {!isMobile ? (
        <StyledGosungPage>
          <GosungSideBar />
          <StyledSideBarParent>
            <StyledSideBarContainer>
              {showSideList && <GosungSideList />}
              {showDetails && <GosungRestaurantDetail />}
              <GosungCloseButton onClick={handleButtonClick} />
            </StyledSideBarContainer>
          </StyledSideBarParent>

          <GosungKakaoMapComponent />
        </StyledGosungPage>
      ) : (
        <GosungMobile></GosungMobile>
      )}
    </>
  );
};

export default GosungComponent;
