import { StyledBox, StyledSubTitle } from './EnrollShow.styled';
import { EnrollShowPropsType } from './EnrollShow.type';

const EnrollShow = ({ place }: EnrollShowPropsType) => {
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
