import styled, { css } from 'styled-components';

const StyledCarouselContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  overflow: visible;
  width: 100%;
  justify-content: space-between;
  transition: transform 1s ease; /* transform 프로퍼티에 대한 애니메이션 효과 추가 */
  transform: translateX(${(props) => props.translateX}%); /* 페이지를 이동시키는 속성 추가 */
`;

const StyledExpoMainPosterContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const ImageUrls = [
      'null',
      'expo_main_pic/ExpoMain1.jpg',
      'expo_main_pic/ExpoMain2.jpg',
      'expo_main_pic/ExpoMain3.jpg',
      'expo_main_pic/ExpoMain4.png',
    ];
    return css`
      display: flex;
      height: 100vh;
      min-width: 100%;
      background-image: url(${ImageUrls[props.num]});
      background-size: cover;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;
  }}
`;

const StyledExpoMainPoster = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledExpoInfo = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 75px;
`;
const StyledExpoMainPoster2 = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledExpoInfo2 = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 50px;
`;

const StyledExpoInfo3 = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
`;

export {
  StyledCarouselContainer,
  StyledExpoMainPosterContainer,
  StyledExpoMainPoster,
  StyledExpoMainPoster2,
  StyledExpoInfo,
  StyledExpoInfo2,
  StyledExpoInfo3,
};
