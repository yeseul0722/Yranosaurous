import { useEffect } from 'react';
import {
  StyldTourCategoryContainer,
  StyledTourCategoryButtonContainer,
  StyledTourCategoryButton,
  StyledTourName,
  StyledCategotyContainer,
} from '../tour/Tour.styled';
import {
  StyledRestaurantContainer,
  StyledRestaurantContent,
  StyledRestaurantImgContainer,
  StyledRestaurantImgBox,
  StyledRestaurantImg,
  StyledRestaurantInfoContainer,
  StyledRestaurantInfoContent,
  StyledRestaurantName,
  StyledRestaurantHashTagContainer,
  StyledRestaurantHashTag,
  StyledRatinContainer,
  StyledRating,
} from './Restaurant.styled';
// import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';
import { useRestaurantListHook } from '../../../../hooks/gosung/useRestaurantListHook';
import { useRestaurantDetailHook } from '../../../../hooks/gosung/useRestaurantDetailHook';
import useGosungListStore from '../../../../stores/mobilegosung/useGosungListStore';
import Rating from 'react-rating';
const MobileRestaurant = (props: any) => {
  const selectCategory = useGosungListStore((state: any) => state.selectCategory); // 선택한 카테고리
  const setSelectCategory = useGosungListStore((state: any) => state.setSelectCategory);
  const resetCategory = useGosungListStore((state: any) => state.resetCategory);
  const restaurantList = useGosungListStore((state: any) => state.restaurantList);
  const setRestaurantList = useGosungListStore((state: any) => state.setRestaurantList);
  const restaurantDetail = useGosungListStore((state: any) => state.restaurantDetail);
  const setOpenList = useGosungListStore((state: any) => state.setOpenList);
  const tour = useGosungListStore((state: any) => state.tour); // 선택한 관광지
  const setTour = useGosungListStore((state: any) => state.setTour);
  const resetTour = useGosungListStore((state: any) => state.resetTour);

  const { getrestaurantList } = useRestaurantListHook();
  const { getRestaurantDetail } = useRestaurantDetailHook();
  // useEffect(() => {
  //   resetCategory();
  //   resetTour();
  // }, []);

  // useEffect(() => {
  //   console.log(restaurantDetail);
  // });

  const handleSelectCategory = (e: any) => {
    setSelectCategory(e.target.name);
    if (selectCategory === e.target.name) {
      setRestaurantList(null);
    } else {
      getrestaurantList(e.target.name);
    }
  };

  const getApi = (location: any) => {
    setTour(location.name);
    getRestaurantDetail(location.id);
    setOpenList();
    // 맛집 클릭 시 맛집 정보를 주스턴드로 저장 했음
    // 주소를 이용해서 마커 찍기
  };

  return (
    <StyldTourCategoryContainer>
      <StyledTourCategoryButtonContainer>
        <StyledTourCategoryButton name="1" select={selectCategory} onClick={handleSelectCategory}>
          # 밥집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="2" select={selectCategory} onClick={handleSelectCategory}>
          # 카페
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="3" select={selectCategory} onClick={handleSelectCategory}>
          # 술집
        </StyledTourCategoryButton>

        <StyledTourCategoryButton name="4" select={selectCategory} onClick={handleSelectCategory}>
          # 고깃집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="5" select={selectCategory} onClick={handleSelectCategory}>
          # 횟집
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="6" select={selectCategory} onClick={handleSelectCategory}>
          # 한식
        </StyledTourCategoryButton>

        <StyledTourCategoryButton name="7" select={selectCategory} onClick={handleSelectCategory}>
          # 중식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="8" select={selectCategory} onClick={handleSelectCategory}>
          # 일식
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="9" select={selectCategory} onClick={handleSelectCategory}>
          # 양식
        </StyledTourCategoryButton>

        <StyledTourCategoryButton name="10" select={selectCategory} onClick={handleSelectCategory}>
          # 이탈리안
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="11" select={selectCategory} onClick={handleSelectCategory}>
          # 패스트푸드
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="12" select={selectCategory} onClick={handleSelectCategory}>
          # 분식
        </StyledTourCategoryButton>

        <StyledTourCategoryButton name="13" select={selectCategory} onClick={handleSelectCategory}>
          # 국물요리
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="14" select={selectCategory} onClick={handleSelectCategory}>
          # 면요리
        </StyledTourCategoryButton>
        <StyledTourCategoryButton name="15" select={selectCategory} onClick={handleSelectCategory}>
          # 해산물
        </StyledTourCategoryButton>
      </StyledTourCategoryButtonContainer>
      <StyledRestaurantContainer>
        {restaurantList?.map((location: any) => {
          return (
            <StyledRestaurantContent key={location.id} onClick={() => getApi(location)}>
              <StyledRestaurantImgContainer>
                <StyledRestaurantImgBox>
                  <StyledRestaurantImg src={location.imgAddress} alt={location.storeName}></StyledRestaurantImg>
                </StyledRestaurantImgBox>
              </StyledRestaurantImgContainer>
              <StyledRestaurantInfoContainer>
                <StyledRestaurantName> | {location.storeName}</StyledRestaurantName>
                <StyledRestaurantHashTagContainer>
                  {location.hashTagList?.map((tag: any) => {
                    return <StyledRestaurantHashTag key={tag.id}>#{tag.name}</StyledRestaurantHashTag>;
                  })}
                </StyledRestaurantHashTagContainer>
                <StyledRatinContainer>
                  <StyledRating>{location.rating}</StyledRating>
                  <Rating
                    readonly={true}
                    initialRating={location.rating}
                    fullSymbol={
                      <img src="/rating/stards.png" alt="Full Star" style={{ maxWidth: '15px', maxHeight: '15px' }} />
                    }
                    emptySymbol={
                      <img src="/rating/stards2.png" alt="Empty Star" style={{ maxWidth: '15px', maxHeight: '15px' }} />
                    }
                    fractions={10}
                  ></Rating>
                </StyledRatinContainer>
              </StyledRestaurantInfoContainer>
            </StyledRestaurantContent>
          );
        })}
      </StyledRestaurantContainer>
    </StyldTourCategoryContainer>
  );
};

export default MobileRestaurant;
