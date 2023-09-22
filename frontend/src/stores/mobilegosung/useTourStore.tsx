import { create } from 'zustand';

const useTourStore = create((set) => ({
  tour: '',
  setTour: (data: any) => set((state: any) => ({ tour: data })),
}));

export default useTourStore;
