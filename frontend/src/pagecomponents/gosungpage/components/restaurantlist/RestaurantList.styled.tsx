import styled from 'styled-components';

const StyledRestaurantListContainer = styled.div``;

const StyledRestaurantContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  cursor: pointer;
`;

const StyledRestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledRestaurantStoreName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.light};
  font-size: 17px;
`;

const StyledRestaurantImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  margin: 10px;
`;

const StyledRestaurantRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export {
  StyledRestaurantListContainer,
  StyledRestaurantContainer,
  StyledRestaurantStoreName,
  StyledRestaurantImg,
  StyledRestaurantRating,
  StyledRestaurantInfo,
};
