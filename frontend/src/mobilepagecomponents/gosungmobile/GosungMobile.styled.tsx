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

const StyledListPositionContainer = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  justify-content: center;
`;

const StyledImgContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 10px;
  width: 70px;
  height: 70px;
`;

const StyledImg = styled.img.attrs<any>((props) => ({
  src: '/mobile/MobileMenu.png',
}))`
  width: 100%;
  height: 100%;
`;

const StyledList = styled.div`
  width: 80px;
  height: 35px;
  margin-bottom: 20px;
`;

const StyledHome = styled.div`
  cursor: pointer;
  position: absolute;
  left: 3%;
  top: 3%;
  z-index: 100;
  width: 50px;
  height: 50px;
`;
const StyledHomeImg = styled.img.attrs<any>((props) => ({
  src: '/gosung/dinosaur.png',
}))`
  width: 100%;
  height: 100%;
`;
export {
  StyledosunMobilePage,
  StyledListContainer,
  StyledListPositionContainer,
  StyledImgContainer,
  StyledImg,
  StyledList,
  StyledHome,
  StyledHomeImg,
};
