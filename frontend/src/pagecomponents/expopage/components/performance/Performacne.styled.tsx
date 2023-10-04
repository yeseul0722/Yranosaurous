import styled, { css } from 'styled-components';

const StyledPerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  background-color: #e0eced;
  align-items: center;
  padding-bottom: 70px;
`;
const StyledPerformance = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  gap: 40px;
`;
const StyledMapContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
`;
const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const main = props.theme.colors.main;
    const fontsize = props.size;
    return css`
      color: ${main};
      font-family: ${font};
      font-size: ${fontsize};
    `;
  }}
`;
const StyledLine = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    return css`
      background-color: ${main};
      height: 2px;
      width: 100%;
      margin-bottom: 1px;
    `;
  }}
`;

export { StyledPerformanceContainer, StyledPerformance, StyledMapContainer, StyledText, StyledLine };
