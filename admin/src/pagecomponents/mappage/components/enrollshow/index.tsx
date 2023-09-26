import Button from '../../../../components/button';
import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledShowText, StyledShowTitle, StyledSubTitle } from './EnrollShow.styled';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
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
              <div>
                {festivals.map((festival) => (
                  <div key={festival.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <StyledShowTitle>{festival.name}</StyledShowTitle>
                      <StyledShowText>{festival.startTime.split('T')[0].split('-').join('.')}</StyledShowText>
                      <StyledShowText>{festival.startTime.split('T')[1]}</StyledShowText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {place && (
            <div style={{ height: '35px' }}>
              <Button ismain="true" label={'공연 추가하기'} />
            </div>
          )}
        </div>
      </div>
      {place && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', paddingTop: '15px' }}>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="false" label={'공연 삭제하기'} />
          </div>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="true" label={'공연 수정하기'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollShow;
