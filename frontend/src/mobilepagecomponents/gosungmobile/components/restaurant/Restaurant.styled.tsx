import styled from 'styled-components';

const StyledRestaurantContainer = styled.div`
  /* padding: 15px 15px 0px 15px; */
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
  overflow: scroll;
  max-height: 40vh;
  align-items: center;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledRestaurantContent = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  margin-top: 3%;

  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledRestaurantImgContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const StyledRestaurantImgBox = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid ${(props) => props.theme.colors.main};
  border-radius: 50%;
`;

const StyledRestaurantImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledRestaurantInfoContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledRestaurantInfoContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.black};
`;
const StyledRestaurantName = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
`;

const StyledRestaurantHashTagContainer = styled.div`
  display: flex;
  width: 90%;
  overflow: scroll;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const StyledRestaurantHashTag = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.black};
  margin-right: 5px;
`;
const StyledRatinContainer = styled.div`
  display: flex;
`;
const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.black};
  margin-right: 5px;
`;
export {
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
};
