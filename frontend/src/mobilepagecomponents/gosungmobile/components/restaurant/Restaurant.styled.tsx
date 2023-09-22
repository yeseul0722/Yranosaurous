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

export { StyledRestaurantContainer, StyledRestaurantContent, StyledRestaurantImgBox, StyledRestaurantImg };
