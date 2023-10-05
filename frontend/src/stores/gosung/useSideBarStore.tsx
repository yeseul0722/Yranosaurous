import { create } from 'zustand';

type Store = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showSideList: boolean;
  setShowSideList: (value: boolean) => void;
};

export const useSideBarStore = create<Store>((set) => ({
  selectedCategory: '맛집',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  showSideList: false,
  setShowSideList: (value) => set({ showSideList: value }),
}));
