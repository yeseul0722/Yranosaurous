import { useEffect } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourName,
} from '../tour/Tour.styled';
import {
  StyledRestaurantContainer,
  StyledRestaurantContent,
  StyledRestaurantImgBox,
  StyledRestaurantImg,
  StyledRestaurantInfoContainer,
  StyledRestaurantInfoContent,
} from './Restaurant.styled';
import useTourStore from '../../../../stores/mobilegosung/useGosungListStore';
import { useRestaurantListHook } from '../../../../hooks/gosung/useRestaurantListHook';
import { useRestaurantDetailHook } from '../../../../hooks/gosung/useRestaurantDetailHook';

const MobileRestaurant = (props: any) => {
  const selectCategory = useTourStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useTourStore((state: any) => state.setSelectCategory);
  const resetCategory = useTourStore((state: any) => state.resetCategory);
  const restaurantList = useTourStore((state: any) => state.restaurantList);
  const restaurantDetail = useTourStore((state: any) => state.restaurantDetail);

  const tour = useTourStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useTourStore((state: any) => state.setTour);
  const resetTour = useTourStore((state: any) => state.resetTour);

  const { getrestaurantList } = useRestaurantListHook();
  const { getRestaurantDetail } = useRestaurantDetailHook();
  // useEffect(() => {
  //   resetCategory();
  //   resetTour();
  // }, []);

  useEffect(() => {
    console.log(restaurantDetail);
  });

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.id);
    getrestaurantList(e.target.id);
  };

  const getApi = (location: any) => {
    setTour(location.name);
    getRestaurantDetail(location.id);
    // 맛집 클릭 시 맛집 정보를 주스턴드로 저장 했음
    // 주소를 이용해서 마커 찍기
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton id="1" onClick={handleSelectCategory}>
          밥집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="2" onClick={handleSelectCategory}>
          카페
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="3" onClick={handleSelectCategory}>
          술집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="4" onClick={handleSelectCategory}>
          고깃집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="5" onClick={handleSelectCategory}>
          횟집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="6" onClick={handleSelectCategory}>
          한식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="7" onClick={handleSelectCategory}>
          중식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="8" onClick={handleSelectCategory}>
          일식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="9" onClick={handleSelectCategory}>
          양식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="10" onClick={handleSelectCategory}>
          이탈리안
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="11" onClick={handleSelectCategory}>
          패스트푸드
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="12" onClick={handleSelectCategory}>
          분식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="13" onClick={handleSelectCategory}>
          국물요리
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="14" onClick={handleSelectCategory}>
          면요리
        </StyledTourCategoryButton>
        <StyledTourCategoryButton id="15" onClick={handleSelectCategory}>
          해산물
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      <StyledRestaurantContainer>
        {restaurantList?.map((location: any) => {
          return (
            <StyledRestaurantContent key={location.id} onClick={() => getApi(location)}>
              <StyledRestaurantImgBox>
                <StyledRestaurantImg src={location.imgAddress} alt={location.storeName}></StyledRestaurantImg>
              </StyledRestaurantImgBox>
              <StyledRestaurantInfoContainer>
                <StyledRestaurantInfoContent>{location.storeName}</StyledRestaurantInfoContent>
                <StyledRestaurantInfoContent>{location.rating}</StyledRestaurantInfoContent>
                <StyledRestaurantInfoContent>{location.ratingCnt}</StyledRestaurantInfoContent>
                {location.hashTagList?.map((tag: any) => {
                  return <StyledRestaurantInfoContent key={tag.id}>{tag.name}</StyledRestaurantInfoContent>;
                })}
              </StyledRestaurantInfoContainer>
            </StyledRestaurantContent>
          );
        })}
      </StyledRestaurantContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileRestaurant;
