import { useState } from 'react';
import Button from '../../../../components/button';
import { StyledBox, StyledCourseMap, StyledSidebar, StyledSubTitle } from './Enrollcourse.styled';
import Input from '../../../../components/input';

const EnrollCourse = (props: any) => {
  console.log(props.courses);

  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0); // 기본값을 0 -> 첫 번째 코스 기본적 선택
  const [selectedCourse, setSelectedCourse] = useState(
    props.courses && props.courses.length > 0 ? props.courses[0] : null,
  );
  const [showInput, setShowInput] = useState(false);
  const handleButtonClick = (index: number) => {
    setSelectedCourseIndex(index);
    setSelectedCourse(props.courses[index]);
    setShowInput(false);
  };
  const handleAddButtonClick = () => {
    setShowInput(true);
    setSelectedCourse(null);
    setSelectedCourseIndex(-1);
  };
  return (
    <div>
      <StyledSidebar>
        <StyledCourseMap>
          {props.courses.map((course: any, index: number) => (
            <div key={course.id} style={{ display: 'inline-block' }}>
              <Button
                ismain={selectedCourseIndex === index ? 'true' : 'false'}
                label={course.name}
                onClick={() => handleButtonClick(index)}
              />
            </div>
          ))}
          <div style={{ width: '23px' }}>
            <Button ismain={showInput ? 'true' : 'false'} label="+" onClick={handleAddButtonClick} />
          </div>
        </StyledCourseMap>
        {showInput && (
          <div>
            <Input type="text" placeholder="코스 이름을 입력하세요" />
          </div>
        )}
        {selectedCourse && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <StyledSubTitle>코스 이름</StyledSubTitle>
              <StyledBox>
                <div style={{ paddingLeft: '15px' }}>{selectedCourse.name}</div>
              </StyledBox>
            </div>
            <div>
              <StyledSubTitle>소요시간</StyledSubTitle>
              <StyledBox>
                <div style={{ paddingLeft: '15px' }}>{selectedCourse.timeTaken}</div>
              </StyledBox>
            </div>
            <div>
              <StyledSubTitle>장소 순서</StyledSubTitle>
              <ul>
                {selectedCourse.courseOrderList.map((order: any) => (
                  <StyledBox key={order.id}>
                    <div style={{ paddingLeft: '15px' }}>{order.place.name}</div>
                  </StyledBox>
                ))}
              </ul>
            </div>
          </div>
        )}
      </StyledSidebar>

      {props.courses && (
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

export default EnrollCourse;
