import styled from 'styled-components';

const StyledRestaurantDetailContainer = styled.div`
  height: 100%;
  width: 770px;
  display: flex;
  position: absolute;
  z-index: 2;
  /* border: 1px solid black; */
  background-color: ${(props) => props.theme.colors.white};
`;

export { StyledRestaurantDetailContainer };
