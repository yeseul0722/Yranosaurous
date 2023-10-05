import styled, { css, keyframes } from 'styled-components';
const slideFromLeft = keyframes`
  0% {
    transform: translateX(-70%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  0% {
    transform: translateX(70%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledLeftBox = styled.div<any>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.showAnimation &&
    css`
      animation: ${slideFromLeft} 0.8s ease-out forwards;
    `}
`;

const StyledRightBox = styled.div<any>`
  width: 500px;
  height: 500px;
  display: flex;

  ${(props) =>
    props.showAnimation &&
    css`
      animation: ${slideFromRight} 0.8s ease-out forwards;
    `}
`;

const StyledPerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background-color: #e0eced;
  align-items: center;
  padding-bottom: 100px;
`;
const StyledPerformance = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  gap: 40px;
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

export { StyledPerformanceContainer, StyledLeftBox, StyledPerformance, StyledRightBox, StyledText, StyledLine };
