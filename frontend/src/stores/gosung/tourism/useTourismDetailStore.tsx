import { create } from 'zustand';

type TourismDetailState = {
  tourismDetail: any;
  setTourismDetail: (tourism: any) => void;
};

export const useTourismDetailStore = create<TourismDetailState>((set) => ({
  tourismDetail: {},
  setTourismDetail: (tourism) => set({ tourismDetail: tourism }),
}));
