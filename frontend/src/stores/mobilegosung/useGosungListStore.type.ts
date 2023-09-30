export interface useGosungListStoretype {
  openList?: boolean;
  setOpenList?: (value: any) => void;
  resetOpenList?: (value: any) => void;

  // 맛집, 숙박, 관광 선택하기
  selectList?: any;
  setSelectList?: (value: any) => void;
  resetSelectList: (value: any) => void;

  // 맛집, 숙박, 관광에서 카테고리 선택하기
  selectCategory?: any;
  setSelectCategory: (value: any) => void;
  resetCategory: (value: any) => void;

  // 관광지 선택하기
  tour: any;
  setTour: (value: any) => void;
  resetTour: (value: any) => void;

  // 식당 카테고리 선택
  restaurantList: [];
  setRestaurantList: (value: any) => void;

  // 식당 디테일
  restaurantDetail: [];
  setRestaurantDetail: (value: any) => void;

  // 관광지 디테일
  tourDetail: [];
  setTourDetail: (value: any) => void;

  // 숙소 리스트
  lodgment: [];
  setLodgment: (value: any) => void;

  // 숙소 디테일
  lodgmentDetail: [];
  setLodgmentDetail: (value: any) => void;
}
