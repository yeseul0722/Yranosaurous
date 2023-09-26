import { Category } from '@mui/icons-material';
import { create } from 'zustand';

type Store = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export const useStore = create<Store>((set) => ({
  selectedCategory: '맛집',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
