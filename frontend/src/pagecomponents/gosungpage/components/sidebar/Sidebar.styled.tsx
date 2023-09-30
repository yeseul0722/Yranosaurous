import styled from 'styled-components';

const StyledSideBarContainer = styled.div`
  min-width: 50px;
  max-width: 50px;
  height: 100vh;
  z-index: 5;
  border-right: 1px solid ${(props) => props.theme.colors.lightgray};
  /* background-color: white; */
`;

const StyledCategoryContainer = styled.div`
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid;
  padding: 7px;
`;

const StyledHomeIcon = styled.div`
  background-image: url('/gosung/dinosaur.png');
  width: 45px;
  height: 45px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
`;

const StyledRestaurantIcon = styled.div`
  background-image: url('/gosung/맛집.png');
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
`;

const StyledAccomodationIcon = styled.div`
  background-image: url('/gosung/숙소.png');
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
`;

const StyledSightseeingIcon = styled.div`
  background-image: url('/gosung/관광.png');
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
`;

export {
  StyledSideBarContainer,
  StyledCategoryContainer,
  StyledCircleContainer,
  StyledRestaurantIcon,
  StyledAccomodationIcon,
  StyledSightseeingIcon,
  StyledHomeIcon,
};
