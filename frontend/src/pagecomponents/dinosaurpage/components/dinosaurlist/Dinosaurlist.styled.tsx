import styled from 'styled-components';

const StyledDinosaurListPage = styled.div.attrs<any>((props) => ({}))`
  /* border: 1px solid red; */
  margin: 18px;
  height: 630px;
`;

const StyledDinosaurListTitle = styled.div.attrs<any>((props) => ({}))`
  /* border: 1px solid orange; */
  text-align: center;
  margin-top: 20px;
  padding: 15px;
`;

const StyledTitleText = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  padding: 5px;
`;

const StyledDinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid blue;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export { StyledDinosaurListPage, StyledDinosaurListTitle, StyledDinosaurListContainer, StyledTitleText };
