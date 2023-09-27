import styled from 'styled-components';

const StyledKoreaDsPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledKoreaDsTitle = styled.div`
  /* border: 1px solid red; */
  /* padding: 5rem; */
  position: absolute;
  padding-top: 5rem;
  cursor: default;
`;

const StyledKoreaDsTitleText = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-size: 70px;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  margin-bottom: 20px;
`;

const StyledKoreaDsContentText = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  padding: 1rem;
`;

const StyledKoreaDsImgContainer = styled.div`
  /* border: 1px solid red; */
  width: 80rem;
  margin-top: auto;
`;

const StyledKoreaDsImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 70rem;
  height: 40rem;
`;

export {
  StyledKoreaDsPage,
  StyledKoreaDsTitle,
  StyledKoreaDsTitleText,
  StyledKoreaDsContentText,
  StyledKoreaDsImgContainer,
  StyledKoreaDsImg,
};
