import { useState } from 'react';
import Button from '../../../../components/button';
import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledShowText, StyledShowTitle, StyledSubTitle } from './EnrollShow.styled';
import Input from '../../../../components/input';
import FestivalInfo from '../festivalinfo';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  const [inputs, setInputs] = useState<{ name: string; date: string; time: string }[]>([]);

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
          <div>
            <StyledSubTitle>장소 이름</StyledSubTitle>
            <StyledBox>
              <div style={{ paddingLeft: '15px' }}> {place && place.name ? place.name : ''}</div>
            </StyledBox>
          </div>
          {!place && <StyledSubTitle> 등록된 장소를 클릭해주세요!</StyledSubTitle>}
          {festivals && festivals.length > 0 && (
            <div>
              <StyledSubTitle>공연 목록</StyledSubTitle>
              <div>
                {festivals.map((festival) => (
                  <div key={festival.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <FestivalInfo festival={festival} />
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
                <div style={{ height: '35px', width: '135px' }}>
                  <Input
                    type="text"
                    placeholder="공연 이름"
                    value={input.name}
                    onChange={(e: any) => handleChange(index, 'name', e.target.value)}
                  />
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  <div style={{ height: '39px', width: '45px' }}>
                    <Button
                      ismain="false"
                      label={'삭제'}
                      style={{ border: '1.6px solid #599198' }}
                      onClick={() => handleDeleteClick(index)}
                    />
                  </div>
                  <div style={{ height: '39px', width: '45px' }}>
                    <Button ismain="true" label={'저장'} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '11px' }}>
                <div style={{ width: '47%', height: '35px' }}>
                  <Input
                    type="date"
                    value={input.date}
                    onChange={(e: any) => handleChange(index, 'date', e.target.value)}
                  />
                </div>
                <div style={{ width: '47%', height: '35px' }}>
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
    </div>
  );
};

export default EnrollShow;
