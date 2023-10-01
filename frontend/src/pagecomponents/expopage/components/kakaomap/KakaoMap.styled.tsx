import styled from 'styled-components';

const StyledKakaoMapContainer = styled.div`
  position: relative;
`;

const StyledMarkerContentContainer = styled.div`
  height: 200px;
  width: 150px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledContent = styled.div`
  width: 120px;
  height: 40px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export { StyledKakaoMapContainer, StyledMarkerContentContainer, StyledImageContainer, StyledImage, StyledContent };
