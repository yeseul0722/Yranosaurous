import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
    0% {
        transform: translateY(70%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const StyledTourismContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const dark = props.theme.colors.dark;
    const white = props.theme.colors.white;
    return css`
      background-color: ${dark};
      color: ${white};
      display: flex;
      padding-top: 100px;
      padding-bottom: 100px;
      justify-content: center;
      flex-direction: column;
    `;
  }}
`;

const StyledNavContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const white = props.theme.colors.white;
    const fontsize = props.size;
    return css`
      color: ${white};
      font-family: ${font};
      font-size: ${fontsize};
    `;
  }}
`;

const StyledWhere = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 40px;
  color: ${(props) => props.theme.colors.white};
`;

const StyeldWhereInfo = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledCardContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  margin-bottom: 30px;
`;

const StyledCardBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

const StyledCardBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.color;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: linear-gradient(to right, ${(props) => props.theme.colors.lightgray} 50%, ${color} 50%);
      ${props.showAnimation &&
      css`
        animation: ${slideUp} 0.8s ease-out forwards;
      `}
    `;
  }}
`;

const StyledCard = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 90%;
  height: 90%;
`;

const StyledCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledCardTextTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
`;
const StyledCardTextContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledGOsungContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const dark = props.theme.colors.dark;
    return css`
      background-color: ${dark};
      display: flex;
      justify-content: flex-end;
      padding-right: 120px;
      margin-top: 40px;
    `;
  }}
`;

const StyledGosung = styled.a`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
  margin-top: 10px;
  padding-bottom: 5px;
  cursor: pointer;
`;

export {
  StyledTourismContainer,
  StyledNavContainer,
  StyledText,
  StyledWhere,
  StyeldWhereInfo,
  StyledCardContainer,
  StyledCardBoxContainer,
  StyledCardBox,
  StyledCard,
  StyledCardTextBox,
  StyledCardTextTitle,
  StyledCardTextContent,
  StyledGOsungContainer,
  StyledGosung,
};
