import { create } from 'zustand';

type State = {
  motelData: any[];
  pensionData: any[];
  guestHouseData: any[];
  selectedCategory: string;
  setMotelData: (items: any[]) => void;
  setPensionData: (items: any[]) => void;
  setGuestHouseData: (items: any[]) => void;
  setSelectedCategory: (category: string) => void;
};

export const useAccommodationApiStore = create<State>((set) => ({
  motelData: [],
  pensionData: [],
  guestHouseData: [],
  selectedCategory: '모텔',
  setMotelData: (items) => set({ motelData: items }),
  setPensionData: (items) => set({ pensionData: items }),
  setGuestHouseData: (items) => set({ guestHouseData: items }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
