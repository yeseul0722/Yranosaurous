import { useState, useEffect } from 'react';
import Button from '../../../../components/button';
import { StyledBox, StyledCourseMap, StyledSidebar, StyledSubTitle } from './Enrollcourse.styled';
import Input from '../../../../components/input';
import useCourseStore from '../../../../stores/course/useCourseStore';
import enrollCoursePost from '../../../../apis/course/enrollCoursePost';
import showDelete from '../../../../apis/show/showDelete';
import courseDelete from '../../../../apis/course/courseDelete';

const EnrollCourse = (props: any) => {
  // console.log(props.place);
  const [places, setPlaces] = useState<any[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [timeTaken, setTimeTaken] = useState('');

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
      console.log(response);
    } catch (error) {
      // console.error('Error while creating payload: ', error);
    }
  };
  const handleDeleteClick = async () => {
    if (!selectedCourse) {
      alert('삭제할 코스를 선택해주세요.');
      return;
    }

    console.log(selectedCourse.id.toString());
    try {
      const response = await courseDelete(selectedCourse.id.toString());
      console.log(response);
      // 예: 코스 목록을 다시 불러오기 or 선택된 코스를 UI에서 제거하기 등
    } catch (error) {
      console.error('Error while deleting course: ', error);
    }
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

        {showInput && (
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <div>
              <StyledSubTitle>코스 이름</StyledSubTitle>
              <Input
                type="text"
                style={{ height: '33px' }}
                value={courseName}
                onChange={(e: any) => setCourseName(e.target.value)}
              />
            </div>
            <div>
              <StyledSubTitle>소요 시간(분)</StyledSubTitle>
              <Input
                type="text"
                style={{ height: '33px' }}
                value={timeTaken}
                onChange={(e: any) => setTimeTaken(e.target.value)}
              />
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
