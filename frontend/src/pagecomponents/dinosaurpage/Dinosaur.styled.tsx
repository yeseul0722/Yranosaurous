import styled from 'styled-components';

const DinosaurPage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  height: 100vh;
  background-color: #000020;
`;

const SidebarContainer = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid orange;
  flex: 1;
`;

const CustomGlobeContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  flex: auto;
`;

const DinosaurListContainer = styled.div.attrs<any>((props) => ({}))`
  flex: 5;
  border-radius: 30px 0px 0px 30px;
  background-color: #ffffff5f;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export { DinosaurPage, CustomGlobeContainer, DinosaurListContainer, SidebarContainer };
