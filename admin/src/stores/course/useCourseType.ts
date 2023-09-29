export interface CourseType {
  id: number;
  name: string;
  timeTaken: number;
  courseOrderList: any[];
}

export interface StoreType {
  selectedCourseIndex: number;
  selectedCourse: CourseType | null;
  setSelectedCourseIndex: (index: number) => void;
  setSelectedCourse: (course: CourseType | null) => void;
}
