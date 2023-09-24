import { create } from 'zustand';

type RestaurantState = {
  restaurantList: any[];
  setRestaurantList: (restaurants: any[]) => void;
};

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurantList: [],
  setRestaurantList: (restaurants) => set({ restaurantList: restaurants }),
}));
