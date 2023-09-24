import { create } from 'zustand';

type RestaurantDetailState = {
  restaurantDetail: any;
  setRestaurantDetail: (restaurant: any) => void;
};

export const useRestaurantDetailStore = create<RestaurantDetailState>((set) => ({
  restaurantDetail: {},
  setRestaurantDetail: (restaurant) => set({ restaurantDetail: restaurant }),
}));
