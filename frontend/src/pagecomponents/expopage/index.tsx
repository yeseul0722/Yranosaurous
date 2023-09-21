import Carousel from './components/maincarousel';
import ExpoInformation from './components/expoinformation';
import EventVenue from './components/eventvenue';
import Ticket from './components/ticket';
import Tourism from './components/tourism';
import Performance from './components/performance';
import { StyledExpoPageContainer, StyledTest } from './Expopage.styled';
const ExpoPageComponent = () => {
  return (
    <StyledExpoPageContainer>
      <Carousel></Carousel>
      <ExpoInformation></ExpoInformation>
      <EventVenue></EventVenue>
      <Ticket></Ticket>
      <Tourism></Tourism>
      <Performance></Performance>
    </StyledExpoPageContainer>
  );
};

export default ExpoPageComponent;
