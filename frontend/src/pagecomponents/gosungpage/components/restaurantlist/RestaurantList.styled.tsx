import styled from 'styled-components';

const StyledRestaurantListContainer = styled.div``;

const StyledRestaurantContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
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

const StyledIcon = styled.div`
  background-image: url('/gosung/dinosaur.png');
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
`;

const StyledInfo = styled.div`
  display: flex;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
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
};
