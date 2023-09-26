import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledSubTitle } from './EnrollShow.styled';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {place && (
        <div>
          <StyledSubTitle>장소 이름</StyledSubTitle>
          <StyledBox>
            <div style={{ paddingLeft: '15px' }}>{place.name}</div>
          </StyledBox>
        </div>
      )}
      {festivals && festivals.length > 0 && (
        <div>
          <StyledSubTitle>공연 목록</StyledSubTitle>
          <StyledBox>
            {festivals.map((festival) => (
              <div style={{ paddingLeft: '15px' }} key={festival.id}>
                {festival.name}
              </div>
            ))}
          </StyledBox>
        </div>
      )}
    </div>
  );
};

export default EnrollShow;
