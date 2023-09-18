import styled, { css } from 'styled-components';

const StyledExpoPageContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100vh;
`;

const StyledExpoMainImageButtonContainer = styled.div.attrs<any>((props) => ({}))`
  width: auto;
`;

const StyledExpoMainImageButton = styled.button.attrs<any>((props) => ({}))`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
`;

const StyledTest = styled.div`
  height: 100vh;
  border: 1px solid black;
`;

export { StyledExpoPageContainer, StyledExpoMainImageButtonContainer, StyledExpoMainImageButton, StyledTest };
