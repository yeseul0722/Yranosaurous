import { useState, useEffect } from 'react';
import Button from '../../../../components/button';
import { StyledBox, StyledCourseMap, StyledSidebar, StyledSubTitle } from './Enrollcourse.styled';
import Input from '../../../../components/input';
import useCourseStore from '../../../../stores/course/useCourseStore';

const EnrollCourse = (props: any) => {
  // console.log(props.place);
  const [places, setPlaces] = useState<any[]>([]);

  const { selectedCourseIndex, selectedCourse, setSelectedCourseIndex, setSelectedCourse } = useCourseStore();
  useEffect(() => {
    if (props.courses && props.courses.length > 0) {
      setSelectedCourse(props.courses[selectedCourseIndex]);
    }
  }, [props.courses, selectedCourseIndex, setSelectedCourse]);

  useEffect(() => {
    if (props.place && !places.some((place) => place.id === props.place.id)) {
      setPlaces((prevPlaces) => [...prevPlaces, props.place]);
    }
  }, [props.place]);

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
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <div>
              <StyledSubTitle>코스 이름</StyledSubTitle>
              <Input type="text" style={{ height: '33px' }} />
            </div>
            <div>
              <StyledSubTitle>소요 시간(분)</StyledSubTitle>
              <Input type="text" style={{ height: '33px' }} />
            </div>
            <div>
              <StyledSubTitle>장소 목록</StyledSubTitle>
              {places.map((place, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <StyledBox style={{ width: '200px' }}>{place.name}</StyledBox>
                  <div style={{ width: '35px', height: '37px' }}>
                    <Button
                      ismain="true"
                      label="-"
                      onClick={() => {
                        setPlaces((prevPlaces) => prevPlaces.filter((p) => p.id !== place.id));
                      }}
                    />
                  </div>
                </div>
              ))}
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
