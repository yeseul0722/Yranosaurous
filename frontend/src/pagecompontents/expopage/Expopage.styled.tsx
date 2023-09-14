import styled from 'styled-components';

const ExpoPageContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100vh;
  border: 1px solid black;
`;
const ExpoMainPosterContainer = styled.div.attrs<any>((props) => ({}))`
  height: 800px;
  background-image: url('expo_main_pic/ExpoMain1.jpg');
  background-size: cover;
`;

const ExpoMainPoster = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid black;
`;

const ExpoInfo = styled.div.attrs<any>((props) => ({}))`
  color: black;
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xxxlarge};
`;

export { ExpoPageContainer, ExpoMainPosterContainer, ExpoMainPoster, ExpoInfo };
