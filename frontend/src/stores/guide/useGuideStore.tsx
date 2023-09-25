import { create } from 'zustand';

const useGuideStore = create((set) => ({
  selectCategory: '',
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
}));

export default useGuideStore;
