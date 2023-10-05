import styled from 'styled-components';

const StyledKakaoMapContainer = styled.div`
  position: relative;
`;

const StyledMarkerContentContainer = styled.div``;

const StyledPostionContainer = styled.div.attrs<any>((props) => ({}))`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 100;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const StyledOnPositionImg = styled.img.attrs<any>((props) => ({
  src: props.myposition ? '/map/onPositionRed.png' : '/map/onPosition.png',
}))`
  width: 100%;
  height: 100%;
`;

export { StyledKakaoMapContainer, StyledMarkerContentContainer, StyledPostionContainer, StyledOnPositionImg };
