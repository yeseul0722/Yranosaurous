import styled from 'styled-components';

const StyledosunMobilePage = styled.div``;

const StyledListContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledImgContainer = styled.div``;

const StyledImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

const StyledList = styled.div`
  width: 80px;
  height: 35px;
  margin-bottom: 20px;
`;

const StyledHome = styled.a`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 100;
`;
export { StyledosunMobilePage, StyledListContainer, StyledImgContainer, StyledImg, StyledList, StyledHome };
