import styled from 'styled-components';

const StyledGuidePage = styled.div``;
const StyledMenuContainer = styled.div`
  width: 330px;
  height: 100vh;
  position: absolute;
  left: 72px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledMenuTitle = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  display: flex;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.light};
`;

const StyledMenuContentContainer = styled.div``;

const StyledMenuContent = styled.div`
  width: 100%;
  height: 60px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const StyledCourceSelectContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.name === props.select && props.theme.colors.main};
  color: ${(props) => (props.name === props.select ? props.theme.colors.white : props.theme.colors.main)};
  font-family: ${(props) => props.theme.fonts.boldfont};
  cursor: pointer;
  gap: 40px;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;
const StyledCourceImageContainer = styled.div`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCourceImage = styled.img.attrs<any>((props) => ({
  src: `/markers/${props.marker}.png`,
}))`
  width: 100%;
  height: 100%;
`;

const StyledCourcePlace = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => (props.select === props.name ? props.theme.colors.white : props.theme.colors.main)};
  margin-left: 40px;
`;
const StyledCourceSelectContainer2 = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
const StyledCourcePlace2 = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  margin-left: 40px;
`;

const Test = styled.div`
  height: 85vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Test2 = styled.div`
  height: 78vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledTimeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  padding: 10px 0px;
  height: 5vh;
`;
const StyledTime = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
`;
export {
  StyledGuidePage,
  StyledMenuContainer,
  StyledMenuTitle,
  StyledMenuContentContainer,
  StyledMenuContent,
  StyledCourceSelectContainer,
  StyledCourceImageContainer,
  StyledCourceImage,
  StyledCourcePlace,
  StyledCourceSelectContainer2,
  StyledCourcePlace2,
  Test,
  Test2,
  StyledTimeContainer,
  StyledTime,
};
