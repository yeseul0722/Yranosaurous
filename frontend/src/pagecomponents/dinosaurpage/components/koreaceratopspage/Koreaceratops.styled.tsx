import styled from 'styled-components';

const StyledKoreaceratopsPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  display: flex;
  justify-content: space-between;
`;

const StyledKoreaceratopsBody = styled.div`
  border: 1px solid red;
`;

const StyledKoreaceratopsGeneration = styled.div`
  border: 1px solid yellow;
`;

const StyledKoreaceratopsTitle = styled.div`
  border: 1px solid yellowgreen;
`;

const StyledKoreaceratopsContent = styled.div`
  border: 1px solid blue;
`;

const StyledKoreaceratopsFigure = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StyledKoreaceratopsImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border: 1px solid aquamarine;
  width: 40rem;
  height: 60rem;
`;

const StyledKoreaceratopsCircle = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 15rem;
  left: 25rem;
  filter: invert(80%);
`;

const StyledKoreaceratopsInfo = styled.div`
  border: 1px solid orange;
  height: 10rem;
  display: flex;
`;

const StyledKoreaceratopsHeight = styled.div`
  border: 1px solid blue;
  color: #ffffff;
`;
const StyledKoreaceratopsWeight = styled.div`
  border: 1px solid blue;
  color: #ffffff;
`;

export {
  StyledKoreaceratopsPage,
  StyledKoreaceratopsBody,
  StyledKoreaceratopsGeneration,
  StyledKoreaceratopsTitle,
  StyledKoreaceratopsContent,
  StyledKoreaceratopsFigure,
  StyledKoreaceratopsCircle,
  StyledKoreaceratopsImg,
  StyledKoreaceratopsInfo,
  StyledKoreaceratopsHeight,
  StyledKoreaceratopsWeight,
};
