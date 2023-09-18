import { create } from 'zustand';
import { CategoryType } from './useCategoryType';

export const useCategoryStore = create<CategoryType>((set) => ({
  selectcat: '1',
  setselectcat: (category) => set({ selectcat: category }),
}));
