import { useState } from 'react';
import Button from '../../../../components/button';
import { EnrollShowPropsType, Festival } from '../../Map.type';
import { StyledBox, StyledShowTitle, StyledSubTitle } from './EnrollShow.styled';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  const [buttontype, setButtontype] = useState('add');
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  const toggleButtonType = () => {
    setSelectedFestival(null);
    setButtontype(buttontype === 'add' ? 'backtolist' : 'add');
  };
  const handleFestivalClick = (festival: Festival) => {
    setButtontype('backtolist');
    setSelectedFestival(festival);
  };
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
      {buttontype === 'add' && festivals && festivals.length > 0 && (
        <div>
          <StyledSubTitle>공연 목록</StyledSubTitle>
          <StyledBox>
            {festivals.map((festival) => (
              <div
                style={{ paddingLeft: '15px', cursor: 'pointer' }}
                key={festival.id}
                onClick={() => handleFestivalClick(festival)}
              >
                {festival.name}
              </div>
            ))}
          </StyledBox>
        </div>
      )}
      {place && (
        <div style={{ height: '35px' }}>
          <Button
            ismain="true"
            label={buttontype === 'add' ? '공연 추가하기' : '리스트로 돌아가기'}
            onClick={toggleButtonType}
          />
        </div>
      )}
      {selectedFestival && (
        <div>
          <StyledSubTitle>공연 정보</StyledSubTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StyledShowTitle>{selectedFestival.name}</StyledShowTitle>
            <div>{selectedFestival.startTime.split('T')[0].split('-').join('.')}</div>
            <div>{selectedFestival.startTime.split('T')[1].substring(0, 5)}</div>
            <div style={{ height: '25px' }}>
              <Button label="삭제" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollShow;
