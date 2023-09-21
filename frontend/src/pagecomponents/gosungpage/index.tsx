import React, { useState } from 'react';
import GosungKakaoMapComponent from '../../components/kakaomap';
import GosungSideBar from '../../components/sidebar';
import { StyledGosungPage } from './Gosung.styled';
import GosungSideList from './components/sidelist';
import GosungCloseButton from '../../components/closebutton';
import GosungCategory from './components/category';
import { useMediaQuery } from 'react-responsive';
import GosungMobile from '../../mobilepagecomponents/gosungmobile';
const GosungComponent: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const [showSideList, setShowSideList] = useState(true);

  const handleButtonClick = () => {
    setShowSideList(!showSideList);
  };

  return (
    <>
      {!isMobile ? (
        <StyledGosungPage>
          <GosungSideBar />
          {showSideList && <GosungSideList />}
          <GosungCloseButton onClick={handleButtonClick} />
          <GosungKakaoMapComponent />
        </StyledGosungPage>
      ) : (
        <GosungMobile></GosungMobile>
      )}
    </>
  );
};

export default GosungComponent;
