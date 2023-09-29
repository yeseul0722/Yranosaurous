import { create } from 'zustand';

type categoryDetailStore = {
  selectedDetail: number;
  setSelectedDetail: (id: number) => void;
};

export const useCategoryDetailStore = create<categoryDetailStore>((set) => ({
  selectedDetail: 0,
  setSelectedDetail: (id) => set({ selectedDetail: id }),
}));
