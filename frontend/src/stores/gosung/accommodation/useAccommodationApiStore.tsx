import { create } from 'zustand';

type State = {
  motelData: any[];
  pensionData: any[];
  guesthouseData: any[];
  selectedCategory: string;
  setMotelData: (items: any[]) => void;
  setPensionData: (items: any[]) => void;
  setGuesthouseData: (items: any[]) => void;
  // setSelectedCategory: (category: string) => void;
};

export const useAccommodationApiStore = create<State>((set) => ({
  motelData: [],
  pensionData: [],
  guesthouseData: [],
  selectedCategory: '모텔',
  setMotelData: (items) => set({ motelData: items }),
  setPensionData: (items) => set({ pensionData: items }),
  setGuesthouseData: (items) => set({ guesthouseData: items }),
  // setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
