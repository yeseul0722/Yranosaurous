import styled, { css } from 'styled-components';

const StyledTourismContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  min-width: 1120px;
  margin: 0px 200px 100px 200px;
  padding-top: 50px;
`;

const StyledNavContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  margin-top: 50px;
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
  max-width: 230px;
  gap: 30px;
`;

const StyledCardBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const color = props.color;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 230px;
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
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
`;
const StyledCardTextContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledGOsungContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
`;

const StyledGosung = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  margin-top: 10px;
  padding-bottom: 5px;
  cursor: pointer;
`;

export {
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
  StyledCardTextContent,
  StyledGOsungContainer,
  StyledGosung,
};
