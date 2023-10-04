import Main1 from './components/maincarousel';
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
        <div>
          <NavBar></NavBar>
          <div style={{ paddingTop: '70px' }}>
            <Main1></Main1>
            <ExpoInformation></ExpoInformation>
            <EventVenue></EventVenue>
            <Ticket></Ticket>
            <Tourism></Tourism>
            <Performance></Performance>
          </div>
          <div style={{ height: '1px' }}></div>
        </div>
      ) : (
        <ExpoMobile></ExpoMobile>
      )}
    </>
  );
};

export default ExpoPageComponent;
