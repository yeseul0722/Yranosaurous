import Carousel from './components/carousel';
import ExpoInformation from './components/expoinformation';
import EventVenue from './components/eventvenue';
import Ticket from './components/ticket';
import { StyledExpoPageContainer } from './Expopage.styled';
const ExpoPageComponent = () => {
  return (
    <StyledExpoPageContainer>
      <Carousel></Carousel>
      <ExpoInformation></ExpoInformation>
      <EventVenue></EventVenue>
      <Ticket></Ticket>
    </StyledExpoPageContainer>
  );
};

export default ExpoPageComponent;
