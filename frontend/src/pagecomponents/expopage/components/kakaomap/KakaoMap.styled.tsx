import styled from 'styled-components';

const StyledKakaoMapContainer = styled.div`
  position: relative;
`;

const StyledMarkerContentContainer = styled.div`
  height: 100px;
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
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
`;
export { StyledKakaoMapContainer, StyledMarkerContentContainer, StyledImageContainer, StyledImage, StyledContent };
