// useRefreshCoursesStore.ts
import { create } from 'zustand';
import { RefreshCoursesType } from './useRefreshCourses.type';

export const useRefreshCoursesStore = create<RefreshCoursesType>((set) => ({
  shouldRefresh: false,
  toggleRefresh: () => set((state) => ({ shouldRefresh: !state.shouldRefresh })),
}));
