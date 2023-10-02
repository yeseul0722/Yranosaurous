import styled from 'styled-components';

const Modal = styled.div.attrs<any>((props) => ({}))`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalWindow = styled.div.attrs<any>((props) => ({}))`
  width: 80%;
  height: 30%;
  background-color: #fff;
  position: absolute;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 50%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 15px;
  display: flex;
  /* flex-direction: column;
  justify-content: space-around; */
  align-items: center;
`;

const ModalTopContainer = styled.div.attrs<any>((props) => ({}))`
  max-width: 100%;
  height: 70%;
  display: flex;
`;

const ModalImgContainer = styled.div.attrs<any>((props) => ({}))`
  min-height: 100%;
  /* width: 30%; */
`;

const ModalImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;

const ModalTopContent = styled.div`
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const ModalTopTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 10px; */
  color: ${(props) => props.theme.colors.main};
`;

const StyledAddressContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* font-size: 10px; */
  color: ${(props) => props.theme.colors.black};
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledCloseButton = styled.button`
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.black};
  border-radius: 5px;
`;
const StyledRatinContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledStar = styled.div`
  font-size: 10px;
  color: red;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* font-size: 10px; */
  color: ${(props) => props.theme.colors.black};
`;
export {
  Modal,
  ModalWindow,
  ModalContainer,
  ModalTopContainer,
  ModalImgContainer,
  ModalImage,
  ModalTopContent,
  ModalTopTitle,
  StyledAddressContainer,
  StyledCloseButton,
  StyledRatinContainer,
  StyledStar,
  StyledRating,
};
