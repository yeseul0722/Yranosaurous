// useRefreshCoursesStore.ts
import { create } from 'zustand';
import { RefreshCoursesType } from './useRefreshCourses.type';

export const useRefreshCoursesStore = create<RefreshCoursesType>((set) => ({
  shouldRefresh: false,
  showMarker: true,
  toggleRefresh: () => set((state) => ({ shouldRefresh: !state.shouldRefresh })),
  setShowMarker: () => set((state) => ({ showMarker: true })),
  setNoShowMarker: () => set((state) => ({ showMarker: false })),
}));
