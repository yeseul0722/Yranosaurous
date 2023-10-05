import React, { useState } from 'react';
import {
  StyledIcon,
  StyledRestaurantContainer,
  StyledRestaurantImg,
  StyledRestaurantInfo,
  StyledRestaurantListContainer,
  StyledRestaurantRating,
  StyledRestaurantStoreName,
  StyledInfo,
  StyledRating,
  StyledRestauranthashtags,
  Styledhashtag,
  StyledRatingNum,
} from './RestaurantList.styled';
import { useRestaurantDetailStore } from '../../../../stores/gosung/restaurants/useRestaurantDetailApiStore';
import RestaurantDetailGet from '../../../../apis/gosung/restaurantDetailGet';
import { useCategoryDetailStore } from '../../../../stores/gosung/useCategoryDetailStore';
import Rating from 'react-rating';

interface GosungRestaurantListProps {
  restaurantlist: any[];
  selectedCategoryId: number;
}

const GosungRestaurantList = ({ restaurantlist, selectedCategoryId }: GosungRestaurantListProps) => {
  const { restaurantDetail, setRestaurantDetail } = useRestaurantDetailStore();
  const { selectedDetail, setSelectedDetail } = useCategoryDetailStore();
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<number | null>(null);

  const handleDetailApi = async (id: number) => {
    const response = await RestaurantDetailGet(id);
    setRestaurantDetail(response.data.response);
    setSelectedDetail(id);
    setSelectedRestaurantId(id);
  };
  const handleImageSrc = `/kakaomap/${selectedCategoryId}.png`;

  return (
    <StyledRestaurantListContainer>
      {restaurantlist &&
        restaurantlist.map((restaurant) => (
          <StyledRestaurantContainer
            key={restaurant.id}
            onClick={() => handleDetailApi(restaurant.id)}
            isSelected={selectedRestaurantId === restaurant.id}
          >
            <StyledRestaurantImg src={restaurant.imgAddress}></StyledRestaurantImg>
            <StyledRestaurantInfo>
              <StyledInfo>
                <StyledIcon src={handleImageSrc} alt="Icon" />
                <StyledRestaurantStoreName>{restaurant.storeName}</StyledRestaurantStoreName>
              </StyledInfo>
              <StyledRating>
                <Rating
                  readonly={true}
                  initialRating={restaurant.rating}
                  fullSymbol={
                    <img src="/rating/stards.png" alt="Full Star" style={{ width: '25px', height: '25px' }} />
                  }
                  emptySymbol={
                    <img src="/rating/stards2.png" alt="Empty Star" style={{ width: '25px', height: '25px' }} />
                  }
                />
                <StyledRatingNum>{restaurant.rating}</StyledRatingNum>
              </StyledRating>
              <StyledRestauranthashtags>
                {restaurant.hashTagList &&
                  restaurant.hashTagList.map((tag: any) => <Styledhashtag key={tag.id}>#{tag.name}</Styledhashtag>)}
              </StyledRestauranthashtags>
            </StyledRestaurantInfo>
          </StyledRestaurantContainer>
        ))}
    </StyledRestaurantListContainer>
  );
};

export default GosungRestaurantList;
