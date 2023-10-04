import { create } from 'zustand';
import { useGosungListStoretype } from './useGosungListStore.type';
const useGosungListStore = create<useGosungListStoretype>((set) => ({
  // 목록보기 열기 닫기
  openList: true,
  setOpenList: () => set((state: any) => ({ openList: !state.openList })), // 목록 열고 닫기
  resetOpenList: () => set(() => ({ openList: false })), // 처음 랜더링 될 때 무조건 false

  // 맛집, 숙박, 관광 선택하기
  selectList: '',
  setSelectList: (data: any) =>
    set((state: any) => ({
      selectList: state.selectList === data ? '' : data,
    })), // 카테고리 선택 시 열리고 같은거 누르면 닫힘
  resetSelectList: () => set(() => ({ selectList: '' })), // 처음 랜더링 될 때 초기화

  // 맛집, 숙박, 관광에서 카테고리 선택하기
  selectCategory: '',
  setSelectCategory: (data: any) =>
    set((state: any) => ({ selectCategory: state.selectCategory === data ? '' : data })), // 카테고리 선택 시 해당 카테고리 관광지 보여줌 누르면 꺼짐
  resetCategory: () => set(() => ({ selectCategory: '' })),

  // 관광지 선택하기
  tour: '',
  setTour: (data: any) => set((state: any) => ({ tour: data })),
  resetTour: () => set(() => ({ tour: '' })), // 처음 랜더링 시 관광지 초기화

  // 식당 카테고리 선택
  restaurantList: [],
  setRestaurantList: (data: any) =>
    set((state: any) => ({
      restaurantList: data,
    })),

  // 식당 디테일
  restaurantDetail: [],
  setRestaurantDetail: (data: any) =>
    set((state: any) => ({
      restaurantDetail: data,
    })),
  resetRestaurantDetail: () => set(() => ({ restaurantDetail: [] })),

  // 관광지 디테일
  tourDetail: [],
  setTourDetail: (data: any) =>
    set((state: any) => ({
      tourDetail: data,
    })),
  resetTourDetail: () => set(() => ({ tourDetail: [] })),

  // 숙소 리스트
  lodgment: [],
  setLodgment: (data: any) =>
    set((state: any) => ({
      lodgment: data,
    })),

  // 숙소 디테일
  lodgmentDetail: [],
  setLodgmentDetail: (data: any) =>
    set((state: any) => ({
      lodgmentDetail: data,
    })),
  resetLodgmentDetail: () => set(() => ({ lodgmentDetail: [] })),
}));

export default useGosungListStore;
