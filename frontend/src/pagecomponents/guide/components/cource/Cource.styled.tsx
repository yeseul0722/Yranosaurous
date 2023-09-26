import styled, { css } from 'styled-components';

const StyledCourceSelectContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
`;
const StyledCourceImageContainer = styled.div`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCourceImage = styled.img.attrs<any>((props) => ({
  src: `markers/${props.marker}.png`,
}))`
  width: 100%;
  height: 100%;
`;

const StyledCourcePlace = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  margin-left: 40px;
`;
export { StyledCourceSelectContainer, StyledCourceImageContainer, StyledCourceImage, StyledCourcePlace };
