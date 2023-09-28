import { useState } from 'react';
import Button from '../../../../components/button';
import { StyledCourseMap } from './Enrollcourse.styled';

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
    setShowInput(true); // + 버튼을 클릭하면 input 태그가 나타남
  };
  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
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
        {showInput && <input type="text" placeholder="코스 이름을 입력하세요" />}
        {props.courses.length > 0 && selectedCourse && (
          <div>
            <div>코스 이름: {selectedCourse.name}</div>
            <div>소요 시간: {selectedCourse.timeTaken}</div>
            <ul>
              {selectedCourse.courseOrderList.map((order: any) => (
                <li key={order.id}>
                  장소 이름: {order.place.name}, ID: {order.place.id}, Sequence: {order.sequence}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
