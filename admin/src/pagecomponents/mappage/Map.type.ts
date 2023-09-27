export type PositionType =
  | {
      lat: number;
      lng: number;
    }
  | undefined;

export interface Festival {
  id: number;
  name: string;
  startTime: string;
  placeName: string;
}

export interface Place {
  id: number;
  name: string;
  longitude: string;
  latitude: string;
  markerNumber: number;
  imgAddress: string;
  content: string;
  type: string;
}

export interface CourseOrder {
  id: number; // 코스 순서 아이디
  sequence: number; // 코스 순서
  place: Place;
}

export interface Course {
  id: number; // 코스 아이디
  name: string; // 코스 이름
  timeTaken: number; // 코스 소요시간 (Assuming this is a number)
  courseOrderList: CourseOrder[];
}

export interface EnrollShowPropsType {
  place: Place | null;
  festivals: Festival[];
}
export interface EnrollCoursePropsType {
  place: Place | null;
  courses: Course[];
}
