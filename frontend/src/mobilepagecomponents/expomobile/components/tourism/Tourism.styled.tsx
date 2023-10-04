import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  background-color: #456d75;
  padding-bottom: 5%;
`;

const StyledTourismContainer = styled.div`
  width: 90%;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const StyledNavContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: 10px;
`;

const StyledWhere = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const StyeldWhereInfo = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 24px; */
  color: ${(props) => props.theme.colors.white};
`;

const StyledCardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
`;

const StyledCardBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 15px;
`;
const StyledCardBoxContainer2 = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 15px;

  justify-content: flex-end;
`;

const StyledCardBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.color;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      max-width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(to right, ${(props) => props.theme.colors.lightgray} 50%, ${color} 50%);
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
`;
const StyledCardTextTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 22px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
`;
const StyledCardTextTitle2 = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 22px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: flex-end;
`;
const StyledCardTextContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
`;
const StyledCardTextContent2 = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: flex-end;
`;

const StyledGOsungContainer = styled.div`
  width: 100%;
  margin-bottom: 1%;
  display: flex;
  justify-content: flex-end;
`;

const StyledGosung = styled.a`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 20px; */
  color: ${(props) => props.theme.colors.white};
  border-bottom: 3px solid ${(props) => props.theme.colors.white};
  margin-top: 10px;
  padding-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
`;
const StyledBannerTitleContainer = styled.div`
  width: 100%;
  display: flex;
`;
const StyledBannerImageContainer = styled.div`
  max-width: 31px;
  max-height: 42px;
`;

const StyledBannerImg = styled.img.attrs<any>((props) => ({
  src: '/mobile/char3.png',
}))`
  width: 100%;
  height: 100%;
`;
export {
  StyledContainer,
  StyledTourismContainer,
  StyledNavContainer,
  StyledWhere,
  StyeldWhereInfo,
  StyledCardContainer,
  StyledCardBoxContainer,
  StyledCardBox,
  StyledCard,
  StyledCardTextBox,
  StyledCardTextTitle,
  StyledCardTextTitle2,
  StyledCardTextContent,
  StyledGOsungContainer,
  StyledGosung,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledCardBoxContainer2,
  StyledCardTextContent2,
};
