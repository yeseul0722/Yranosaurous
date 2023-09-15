import styled from 'styled-components';

const ExpoPageContainer = styled.div.attrs<any>((props) => ({}))`
  height: 100vh;
  border: 1px solid black;
`;
const ExpoMainPosterContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  height: 100vh;
  background-image: url(expo_main_pic/ExpoMain1.jpg);
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const ExpoMainPoster = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid black;
`;

const ExpoInfo = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xxxlarge};
`;

const Test = styled.div`
  height: 100vh;
  border: 1px solid black;
`;

export { ExpoPageContainer, ExpoMainPosterContainer, ExpoMainPoster, ExpoInfo, Test };
