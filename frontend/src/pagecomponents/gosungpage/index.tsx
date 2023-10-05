import React, { useState, useEffect } from 'react';
import GosungKakaoMapComponent from './components/kakaomap';
import GosungSideBar from './components/sidebar';
import { StyledSideBarContainer, StyledGosungPage, StyledSideBarParent } from './Gosung.styled';
import GosungSideList from './components/sidelist';
import GosungCloseButton from '../../components/closebutton';
import GosungCategory from './components/foodcategory';
import GosungRestaurantDetail from './components/restaurantdetail';
import { useRestaurantDetailStore } from '../../stores/gosung/restaurants/useRestaurantDetailApiStore';
import { useMediaQuery } from 'react-responsive';
import GosungMobile from '../../mobilepagecomponents/gosungmobile';
import { useSideBarStore } from '../../stores/gosung/useSideBarStore';
import GosungAccomoDetail from './components/accomodetail';
import GosungTourismDetail from './components/tourismdetail';
import { useAccommodationDetailStore } from '../../stores/gosung/accommodation/useAccommodationDetailStore';
import { useTourismDetailStore } from '../../stores/gosung/tourism/useTourismDetailStore';

const GosungComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const { showSideList, setShowSideList } = useSideBarStore();
  const [showDetails, setShowDetails] = useState(false);
  const [isRender, setIsRender] = useState(true);
  const selectedCategory = useSideBarStore((state) => state.selectedCategory);
  console.log(showSideList, 'side');

  useEffect(() => {
    if (isRender) {
      setIsRender(false);
    } else {
      setShowDetails(false);
      setShowSideList(true);
    }
  }, [selectedCategory]);

  const handleButtonClick = () => {
    setShowSideList(!showSideList);
    setShowDetails(!showDetails);
  };

  const { restaurantDetail } = useRestaurantDetailStore();
  const { accommodationDetail } = useAccommodationDetailStore();
  const { tourismDetail } = useTourismDetailStore();

  useEffect(() => {
    if (
      Object.keys(restaurantDetail).length > 0 ||
      Object.keys(tourismDetail).length > 0 ||
      Object.keys(accommodationDetail).length > 0
    ) {
      setShowDetails(true);
    }
  }, [restaurantDetail, accommodationDetail, tourismDetail]);

  // useEffect(() => {
  //   setShowDetails(false);
  //   setShowSideList(true);
  // }, [selectedCategory]);

  let DetailComponent;

  switch (selectedCategory) {
    case '맛집':
      DetailComponent = <GosungRestaurantDetail />;
      break;
    case '숙박':
      DetailComponent = <GosungAccomoDetail />;
      break;
    case '관광':
      DetailComponent = <GosungTourismDetail />;
      break;
    default:
      DetailComponent = null;
  }

  return (
    <>
      {!isMobile ? (
        <StyledGosungPage>
          <GosungSideBar />
          <StyledSideBarParent>
            <StyledSideBarContainer>
              {showSideList && <GosungSideList />}
              {showSideList && showDetails && DetailComponent}
              <GosungCloseButton onClick={handleButtonClick} showSideList={showSideList} />
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
