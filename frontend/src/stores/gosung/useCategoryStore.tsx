import { create } from 'zustand';

type categoryStore = {
  selectedCategory: any;
  setSelectedCategory: (category: any) => void;
};

export const useCategoryStore = create<categoryStore>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
