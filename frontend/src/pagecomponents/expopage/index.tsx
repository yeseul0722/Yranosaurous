import { StyledExpoPageContainer, StyledTest } from './Expopage.styled';
import Main from './components/mainimage';
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
      <Main time={time}></Main>
      <StyledTest></StyledTest>
    </StyledExpoPageContainer>
  );
};

export default ExpoPageComponent;
