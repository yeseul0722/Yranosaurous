import { useState, useEffect } from 'react';
import Button from '../../../../../components/button';
import { StyledBox, StyledCourseMap, StyledSidebar, StyledSubTitle } from './Enrollcourse.styled';
import Input from '../../../../../components/input';
import useCourseStore from '../../../../../stores/course/useCourseStore';
import enrollCoursePost from '../../../../../apis/course/enrollCoursePost';
import courseDelete from '../../../../../apis/course/courseDelete';
import CourseInfo from '../courseinfo';
import { useRefreshCoursesStore } from '../../../../../stores/course/useRefreshCourseStore';

const EnrollCourse = (props: any) => {
  const [places, setPlaces] = useState<any[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [timeTaken, setTimeTaken] = useState('');
  const { toggleRefresh } = useRefreshCoursesStore();
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

  const handleCourseClick = (index: number) => {
    setSelectedCourseIndex(index);
    setSelectedCourse(props.courses[index]);
    setShowInput(false);
  };
  const handleAddButtonClick = () => {
    setShowInput(true);
    setSelectedCourse(null);
    setSelectedCourseIndex(-1);
  };

  const handleSaveClick = async () => {
    if (!courseName || !timeTaken || places.length === 0) {
      alert('코스 이름, 소요 시간 및 장소를 정확하게 기입해주세요.');
      return;
    }

    try {
      const courseOrderRequestList = places.map((place, index) => ({
        sequence: index + 1,
        placeId: place.id,
      }));

      const data = {
        name: courseName,
        timeTaken: parseInt(timeTaken, 10),
        courseOrderRequestList,
      };
      const response = await enrollCoursePost(data);
      toggleRefresh();
      setCourseName('');
      setTimeTaken('');
      setPlaces([]);
      // console.log(response);
    } catch (error) {}
  };
  const handleDeleteClick = async () => {
    if (!selectedCourse) {
      alert('삭제할 코스를 선택해주세요.');
      return;
    }

    // console.log(selectedCourse.id.toString());
    try {
      const response = await courseDelete(selectedCourse.id.toString());
      toggleRefresh();
      setCourseName('');
      setTimeTaken('');
      setPlaces([]);
      // console.log(response);
    } catch (error) {}
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
                onClick={() => handleCourseClick(index)}
              />
            </div>
          ))}
          <div style={{ width: '23px' }}>
            <Button ismain={showInput ? 'true' : 'false'} label="+" onClick={handleAddButtonClick} />
          </div>
        </StyledCourseMap>

        {selectedCourse && <CourseInfo />}

        {showInput && (
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <div>
              <StyledSubTitle>코스 이름</StyledSubTitle>
              <Input
                type="text"
                style={{ height: '33px', width: '235px' }}
                value={courseName}
                onChange={(e: any) => setCourseName(e.target.value)}
              />
            </div>
            <div>
              <StyledSubTitle>소요 시간(분)</StyledSubTitle>
              <Input
                type="text"
                style={{ height: '33px', width: '235px' }}
                value={timeTaken}
                onChange={(e: any) => setTimeTaken(e.target.value)}
              />
            </div>
            <div>
              <StyledSubTitle>장소 목록</StyledSubTitle>
              {places.map((place, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <StyledBox style={{ width: '200px' }}>
                    <div style={{ paddingLeft: '15px' }}>{place.name}</div>
                  </StyledBox>
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
            <Button ismain="false" label={'삭제하기'} onClick={handleDeleteClick} />
          </div>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="true" label={'저장하기'} onClick={handleSaveClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollCourse;
