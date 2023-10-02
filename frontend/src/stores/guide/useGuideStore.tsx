import { create } from 'zustand';

const useGuideStore = create((set) => ({
  selectCategory: '', //추천코스,편의시설,관람요소 중 하나 선택
  setSelectCategory: (data: any) =>
    set((state: any) => ({
      selectCategory: data,
    })),

  place: [], // 편의시설에서 선택 시 해당 정보가 담기는 곳
  setPlace: (data: any) =>
    set((state: any) => ({
      place: data,
    })),
  resetPlace: () => set(() => ({ place: [] })),

  // 코스 리스트
  courceList: [],
  setCourcelist: (data: any) => set((state: any) => ({ courceList: data })),
  // 선택한 코스
  selectCourse: '',
  setSelectCourse: (data: any) => set((state: any) => ({ selectCourse: data })),
  // 코스 좌표, 마커
  positions: [],
  setPositions: (data: any) =>
    set((state: any) => ({
      ...state,
      positions: [...state.positions, data],
    })),
  resetPositions: () => set(() => ({ positions: [] })),

  // 편의시설, 관람요소에서 선택한 장소
  selectPlace: '',
  setSelectPlace: (data: any) =>
    set((state: any) => ({
      selectPlace: data,
    })),

  // 엑스포 메인 공연 장소
  festival: '',
  setFestival: (data: any) =>
    set((state: any) => ({
      festival: data,
    })),

  // 선택한 장소
  festivalID: '',
  setFestivalID: (data: any) =>
    set((state: any) => ({
      festivalID: data,
    })),
}));

export default useGuideStore;
