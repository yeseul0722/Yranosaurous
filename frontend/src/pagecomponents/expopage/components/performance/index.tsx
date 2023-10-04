import {
  StyledPerformanceContainer,
  StyledPerformance,
  StyledMapContainer,
  StyledText,
  StyledLine,
} from './Performacne.styled';
import Map from '../kakaomap';
import FestivalTable from '../festivaltable';
const Performance = () => {
  return (
    <StyledPerformanceContainer>
      <StyledPerformance>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
            <StyledText size="43px">행사장 안내</StyledText>
            <StyledText size="20px">소요 시간별 추천경로, 행사장 내 먹거리, 편의시설을 확인해보세요!</StyledText>
          </div>
          <a href="/Guide">
            <StyledText size="24px">행사장 안내 ➜</StyledText>
            <StyledLine />
            <StyledLine />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/mobile/char4.png" style={{ height: '60px' }} />
              <StyledText size="38px">오늘의 공연</StyledText>
            </div>
            <FestivalTable />
          </div>
          <StyledMapContainer>
            <Map></Map>
          </StyledMapContainer>
        </div>
      </StyledPerformance>
    </StyledPerformanceContainer>
  );
};

export default Performance;
