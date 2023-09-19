import styled, { css } from 'styled-components';

const StyledCarouselContainer = styled.div.attrs<any>((props) => ({}))`
  width: 100%;
  height: 100%;
  .slick-dots {
    position: absolute;
    bottom: 20%;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 20px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 1;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: black;
  }
`;

const StyledExpoMainPosterContainer = styled.div.attrs<any>((props) => ({}))`
  /* ${(props) => {
    const ImageUrls = [
      'null',
      'expo_main_pic/performance1.png',
      'expo_main_pic/ExpoMain2.jpg',
      'expo_main_pic/ExpoMain3.jpg',
      'expo_main_pic/ExpoMain4.png',
    ];
    return css`
      display: flex;
      height: 100%;
      min-width: 100%;
      background-image: url(${ImageUrls[props.image]});
      background-size: cover;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;
  }} */
  width: 100%;
  height: 100%;
`;

const Test = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.lat,
}))`
  width: 100%;
  height: 100%;
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

const StyledTextBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledCarouselContainer,
  StyledExpoMainPosterContainer,
  StyledExpoMainPoster,
  StyledExpoMainPoster2,
  StyledExpoInfo,
  StyledExpoInfo2,
  StyledExpoInfo3,
  StyledTextBox,
  Test,
};
