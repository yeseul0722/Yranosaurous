import styled from 'styled-components';

const StyledRestaurantContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
  max-height: 40vh;
`;

const StyledRestaurantContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 10px;
`;

const StyledRestaurantImgBox = styled.div`
  width: 30%;
  height: 100px;
`;

const StyledRestaurantImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

const StyledRestaurantInfoContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledRestaurantInfoContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 15px;
  color: ${(props) => props.theme.colors.main};
`;
export {
  StyledRestaurantContainer,
  StyledRestaurantContent,
  StyledRestaurantImgBox,
  StyledRestaurantImg,
  StyledRestaurantInfoContainer,
  StyledRestaurantInfoContent,
};
