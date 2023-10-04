import { StyledBox, StyledSubTitle } from './CourseInfo.styled';
import useCourseStore from '../../../../../stores/course/useCourseStore';

const CourseInfo = () => {
  const { selectedCourse } = useCourseStore();

  return (
    <div>
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
    </div>
  );
};

export default CourseInfo;
