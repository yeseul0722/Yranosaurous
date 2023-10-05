import styled from 'styled-components';
import { useRestaurantStore } from '../../../../stores/gosung/restaurants/useRestaurantApiStore';

const StyledRestaurantDetailContainer = styled.div`
  /* height: 100%; */
  width: 360px;
  display: flex;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledRestaurantImgWrap = styled.div`
  width: 100%;
  height: 220px;
  /* overflow: hidden; */
  margin-bottom: 15px;
`;

const StyledRestaurantDetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledRestaurantName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  padding-bottom: 15px;
  /* margin-bottom: 10px; */
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
`;

const StyledRestauranthashtags = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const Styledhashtag = styled.div`
  display: flex;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  margin-right: 5px;
  padding-right: 6px;
  padding-left: 6px;
  white-space: nowrap;
  font-size: 14px;
  /* cursor: pointer; */
`;

const StyledRestaurantInfo = styled.div`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledRestaurantAdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRestaurantAd = styled.div`
  margin-left: 10px;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const StyledMenuContainer = styled.div`
  height: 300px;
`;

const StyledReviewContainer = styled.div`
  height: 300px;
  margin: 20px 0;
`;

const StyledLocationIcon = styled.div`
  background-image: url('/gosung/location.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

export {
  StyledRestaurantDetailContainer,
  StyledRestaurantDetailImg,
  StyledRestaurantImgWrap,
  StyledRestaurantName,
  StyledRestauranthashtags,
  Styledhashtag,
  StyledRestaurantInfo,
  StyledRestaurantAd,
  StyledRating,
  StyledRestaurantAdContainer,
  StyledMenuContainer,
  StyledReviewContainer,
  StyledLocationIcon,
};
