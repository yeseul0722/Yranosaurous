import { create } from 'zustand';
import { StoreType } from './useCourseType';

const useCourseStore = create<StoreType>((set) => ({
  selectedCourseIndex: 0,
  selectedCourse: null,
  setSelectedCourseIndex: (index) => set({ selectedCourseIndex: index }),
  setSelectedCourse: (course) => set({ selectedCourse: course }),
}));

export default useCourseStore;
