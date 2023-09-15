import styled from 'styled-components';

const StyledDinosaurListPage = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid red;
  margin: 18px;
  height: 630px;
`;

const StyledDinosaurListTitle = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid orange;
  text-align: center;
`;

const StyledDinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid blue;
  margin-top: 10px;
`;

export { StyledDinosaurListPage, StyledDinosaurListTitle, StyledDinosaurListContainer };
