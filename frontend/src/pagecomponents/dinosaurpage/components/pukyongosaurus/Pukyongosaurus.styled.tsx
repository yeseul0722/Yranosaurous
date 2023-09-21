import styled from 'styled-components';

const StyledpukyongsaurusPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
  display: flex;
  justify-content: space-between;
`;

const StyledpukyongsaurusBody = styled.div`
  border: 1px solid red;
`;

const StyledpukyongsaurusGeneration = styled.div`
  border: 1px solid yellow;
`;

const StyledpukyongsaurusTitle = styled.div`
  border: 1px solid yellowgreen;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 3rem;
`;

const StyledpukyongsaurusLittleTitle = styled.div`
  border: 1px solid yellowgreen;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  font-size: 2rem;
`;

const StyledpukyongsaurusContent = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

const StyledpukyongsaurusFigure = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StyledpukyongsaurusImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border: 1px solid aquamarine;
  width: 40rem;
  height: 60rem;
`;

const StyledpukyongsaurusCircle = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 15rem;
  left: 25rem;
  filter: invert(80%);
`;

const StyledpukyongsaurusInfo = styled.div`
  border: 1px solid orange;
  height: 10rem;
  display: flex;
`;

const StyledpukyongsaurusHeight = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;
const StyledpukyongsaurusWeight = styled.div`
  border: 1px solid blue;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

export {
  StyledpukyongsaurusPage,
  StyledpukyongsaurusBody,
  StyledpukyongsaurusGeneration,
  StyledpukyongsaurusTitle,
  StyledpukyongsaurusLittleTitle,
  StyledpukyongsaurusContent,
  StyledpukyongsaurusFigure,
  StyledpukyongsaurusCircle,
  StyledpukyongsaurusImg,
  StyledpukyongsaurusInfo,
  StyledpukyongsaurusHeight,
  StyledpukyongsaurusWeight,
};
