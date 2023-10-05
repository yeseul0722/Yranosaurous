import styled from 'styled-components';

const StyledRestaurantListContainer = styled.div``;

const StyledRestaurantContainer = styled.div<{ isSelected: boolean }>`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.light : props.theme.colors.white)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

const StyledRestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledRestaurantStoreName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 17px;
`;

const StyledRestaurantImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  margin: 10px;
  border: 7px solid ${(props) => props.theme.colors.main};
`;

const StyledRestaurantRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 5px;
`;

const StyledInfo = styled.div`
  display: flex;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const StyledRatingNum = styled.div`
  margin-left: 10px;
  margin-bottom: 7px;
`;

const StyledRestauranthashtags = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  flex-wrap: wrap;
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
  font-size: 11px;
  margin-bottom: 5px;
  /* cursor: pointer; */
`;

export {
  StyledRestaurantListContainer,
  StyledRestaurantContainer,
  StyledRestaurantStoreName,
  StyledRestaurantImg,
  StyledRestaurantRating,
  StyledRestaurantInfo,
  StyledIcon,
  StyledInfo,
  StyledRating,
  StyledRestauranthashtags,
  Styledhashtag,
  StyledRatingNum,
};
