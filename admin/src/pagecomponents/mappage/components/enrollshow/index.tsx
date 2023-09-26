import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledSubTitle } from './EnrollShow.styled';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  console.log('festival', festivals);
  return (
    <div>
      {place && (
        <div>
          <StyledSubTitle>장소 이름</StyledSubTitle>
          <StyledBox>
            <div style={{ paddingLeft: '15px' }}>{place.name}</div>
          </StyledBox>
        </div>
      )}
    </div>
  );
};

export default EnrollShow;
