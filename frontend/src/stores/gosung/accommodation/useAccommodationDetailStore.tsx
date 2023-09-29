import { create } from 'zustand';

type AccomodationDetailState = {
  accommodationDetail: any;
  setAccommodationDetail: (accommodation: any) => void;
};

export const useAccommodationDetailStore = create<AccomodationDetailState>((set) => ({
  accommodationDetail: {},
  setAccommodationDetail: (accommodation) => set({ accommodationDetail: accommodation }),
}));
