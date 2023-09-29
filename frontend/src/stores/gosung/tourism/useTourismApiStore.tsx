import { create } from 'zustand';

type TourismState = {
  tourismList: any[];
  setTourismList: (tourims: any[]) => void;
};

export const useTourismStore = create<TourismState>((set) => ({
  tourismList: [],
  setTourismList: (tourisms) => set({ tourismList: tourisms }),
}));
