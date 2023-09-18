import Carousel from './components/Carousel';
import { StyledExpoPageContainer, StyledTest } from './Expopage.styled';

import { useState, useEffect } from 'react';
const ExpoPageComponent = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime == 3 ? 0 : prevTime + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledExpoPageContainer>
      <Carousel></Carousel>
      <StyledTest></StyledTest>
    </StyledExpoPageContainer>
  );
};

export default ExpoPageComponent;
