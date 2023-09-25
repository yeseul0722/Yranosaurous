import Carousel from './components/maincarousel';
import ExpoInformation from './components/expoinformation';
import EventVenue from './components/eventvenue';
import Ticket from './components/ticket';
import Tourism from './components/tourism';
import Performance from './components/performance';
import { StyledExpoPageContainer, StyledTest } from './Expopage.styled';
import { useMediaQuery } from 'react-responsive';
import NavBar from '../../components/navbar';
import ExpoMobile from '../../mobilepagecomponents/expomobile';
const ExpoPageComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <>
      {!isMobile ? (
        <StyledExpoPageContainer>
          <NavBar></NavBar>
          <Carousel></Carousel>
          <ExpoInformation></ExpoInformation>
          <EventVenue></EventVenue>
          <Ticket></Ticket>
          <Tourism></Tourism>
          <Performance></Performance>
        </StyledExpoPageContainer>
      ) : (
        <ExpoMobile></ExpoMobile>
      )}
    </>
  );
};

export default ExpoPageComponent;
