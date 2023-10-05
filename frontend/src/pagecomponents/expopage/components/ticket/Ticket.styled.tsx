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
const StyledTicketContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;
    return css`
      background-color: ${main};
      color: ${white};
      display: flex;
      padding-top: 101px;
      padding-bottom: 101px;
      justify-content: center;
    `;
  }}
`;
const StyledWhitebox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    return css`
      border: 8px solid ${white};
      color: ${white};
      display: flex;
      padding: 50px 100px;
      border-radius: 30px;
      gap: 30px;
    `;
  }}
`;

const StyledTicketLeftContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.lightgray} 50%,
    ${(props) => props.theme.colors.main} 50%
  );

  ${(props) =>
    props.showAnimation &&
    css`
      animation: ${slideFromLeft} 0.8s ease-out forwards;
    `}
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 90%;
  height: 90%;
`;

const StyledTiketTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 50px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const StyledTicetInfoBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    return css`
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 20px;
      color: ${white};
    `;
  }}
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
      text-align: left;
    `;
  }}
`;
const StyledReserve = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
`;

const StyledPrice = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  display: flex;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledButtonBox = styled.div`
  width: 200px;
`;

export {
  StyledTicketContainer,
  StyledWhitebox,
  StyledText,
  StyledTicketLeftContainer,
  StyledImageContainer,
  StyledImage,
  StyledTiketTitle,
  StyledReserve,
  StyledPrice,
  StyledTicetInfoBox,
  StyledButtonContainer,
  StyledButtonBox,
};
