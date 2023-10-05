import Main1 from './components/main1';
import Ticket from './components/ticket';
import Tourism from './components/tourism';
import Performance from './components/performance';
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
        <div style={{ backgroundColor: '#3D5A61' }}>
          <audio src="/bgm.mp3" autoPlay loop />
          <NavBar currentPage="ExpoPage"></NavBar>
          <div style={{ paddingTop: '60px' }}>
            <Main1></Main1>
            <Performance></Performance>
            <Ticket></Ticket>
            <Tourism></Tourism>
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
