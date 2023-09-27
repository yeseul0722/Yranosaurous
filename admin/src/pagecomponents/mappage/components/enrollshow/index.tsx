import { useState } from 'react';
import Button from '../../../../components/button';
import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledShowText, StyledShowTitle, StyledSubTitle } from './EnrollShow.styled';
import Input from '../../../../components/input';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  const [inputs, setInputs] = useState<{ name: string; date: string; time: string }[]>([]); // 타입 명시

  const handleAddClick = () => {
    setInputs([...inputs, { name: '', date: '', time: '' }]);
  };
  const handleChange = (index: number, field: string, value: string) => {
    setInputs((prevInputs) => prevInputs.map((input, i) => (i === index ? { ...input, [field]: value } : input)));
  };

  const handleDeleteClick = (index: number) => {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

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
              <Button ismain="true" label={'공연 추가하기'} onClick={handleAddClick} />
            </div>
          )}
          {inputs.map((input, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '90px',
                justifyContent: 'space-around',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ height: '35px', width: '180px' }}>
                  <Input
                    type="text"
                    placeholder="공연 이름"
                    value={input.name}
                    onChange={(e: any) => handleChange(index, 'name', e.target.value)}
                  />
                </div>
                <div style={{ height: '35px', width: '50px', marginTop: '2px' }}>
                  <Button ismain="true" label={'삭제'} onClick={() => handleDeleteClick(index)} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%', height: '35px' }}>
                  <Input
                    type="date"
                    value={input.date}
                    onChange={(e: any) => handleChange(index, 'date', e.target.value)}
                  />
                </div>
                <div style={{ width: '48%', height: '35px' }}>
                  <Input
                    type="time"
                    value={input.time}
                    onChange={(e: any) => handleChange(index, 'time', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {place && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', paddingTop: '15px' }}>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="false" label={'삭제하기'} />
          </div>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="true" label={'저장하기'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollShow;
