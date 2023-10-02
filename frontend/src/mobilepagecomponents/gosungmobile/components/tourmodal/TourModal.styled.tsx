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
  height: 50%;
  background-color: #fff;
  position: absolute;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
`;

const ModalTopContainer = styled.div.attrs<any>((props) => ({}))`
  max-width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
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
  border-radius: 50%;
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
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledAddressTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;
const StyledAddressTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
  margin-left: 30px;
`;
const StyledAddressContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
const StyledAddress = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 12px;
  color: ${(props) => props.theme.colors.black};
  overflow: scroll;
  padding-left: 30px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const StyledCloseButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledCloseButtonBox = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 3%;
`;
const StyledCloseButton = styled.img.attrs<any>((props) => ({
  src: '/mobile/CloseButton.png',
}))`
  /* padding: 5px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.black};
  border-radius: 5px; */

  width: 100%;
  height: 100%;
`;

const StyledContentContainer = styled.div`
  border-radius: 20px;
  width: 90%;
  height: 50%;
  overflow: scroll;
  padding: 10px;
  margin-bottom: 10px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyeldContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
`;
const StyledImgaContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
`;
const StyledMenuReviewContainer = styled.div`
  width: 100%;
  height: 65%;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
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
  StyledContentContainer,
  StyeldContent,
  StyledAddressTitleContainer,
  StyledAddressTitle,
  StyledAddress,
  StyledCloseButtonContainer,
  StyledCloseButtonBox,
  StyledImgaContainer,
  StyledMenuReviewContainer,
};
