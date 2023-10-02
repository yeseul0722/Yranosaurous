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
  height: 80%;
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

const StyledHashTagContainer = styled.div`
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  justify-content: space-between;
  margin: 10px;
`;
const StyledHashTag = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 10px; */
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.main};
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  height: 20px;
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

const StyledMenuContainer = styled.div`
  height: 15%;
  overflow: scroll;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const StyledMenuTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;
const StyledMenuTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  /* margin-top: 10px; */
  margin-left: 30px;
`;

const StyledMenuItem = styled.div`
  /* width: 100%; */
  /* height: 20%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 12px;
`;

const StyledMenu = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 15px; */
  color: ${(props) => props.theme.colors.black};
`;

const StyledReviewTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledReviewTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.main};
  /* margin-bottom: 10px; */
  margin-left: 30px;
`;

const StyledReviewContainer = styled.div`
  height: 20%;
  overflow: scroll;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledReviewItem = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 0px 30px 10px 30px;
  background-color: ${(props) => (props.index % 2 ? props.theme.colors.main : props.theme.colors.white)};
  border: 2px solid ${(props) => (props.index % 2 ? props.theme.colors.white : props.theme.colors.main)};
  border-radius: 10px;
  font-size: 12px;
`;

const StyledReview = styled.a.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => (props.index % 2 ? props.theme.colors.white : props.theme.colors.main)};
  text-decoration: none;
  white-space: nowrap; /* 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 내용 숨김 처리 */
  text-overflow: ellipsis; /* 넘치는 내용에 "..." 추가 */
`;
const StyledCloseButtonContainer = styled.div`
  width: 100%;
  height: 5%;
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

const StyledMenuReviewContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
`;

const StyledImgaContainer = styled.div`
  max-width: 150px;
  max-height: 150px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
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
  StyledHashTagContainer,
  StyledHashTag,
  StyledAddressContainer,
  StyledRatinContainer,
  StyledStar,
  StyledRating,
  StyledMenuContainer,
  StyledMenuTitle,
  StyledMenuItem,
  StyledMenu,
  StyledReviewTitle,
  StyledReviewContainer,
  StyledReviewItem,
  StyledReview,
  StyledCloseButton,
  StyledMenuReviewContainer,
  StyledImgaContainer,
  StyledMenuTitleContainer,
  StyledReviewTitleContainer,
  StyledAddressTitleContainer,
  StyledAddressTitle,
  StyledAddress,
  StyledCloseButtonContainer,
  StyledCloseButtonBox,
};
