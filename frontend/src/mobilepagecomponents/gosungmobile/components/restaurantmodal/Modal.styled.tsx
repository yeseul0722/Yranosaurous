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
`;

const ModalContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ModalTopContainer = styled.div.attrs<any>((props) => ({}))`
  max-width: 100%;
  height: 15%;
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

const StyledHashTagContainer = styled.div`
  height: 30px;
  margin-top: auto;
  display: flex;

  flex-wrap: wrap;
  overflow: scroll;
  justify-content: space-around;
`;
const StyledHashTag = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* font-size: 10px; */
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.black};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: flex-start;
`;

const StyledAddressContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* font-size: 10px; */
  color: ${(props) => props.theme.colors.black};
  overflow: scroll;
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
  height: 30%;
  overflow: scroll;
  padding: 10px;
`;

const StyledMenuTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 20px; */
  color: ${(props) => props.theme.colors.main};
  /* margin-top: 10px; */
`;

const StyledMenuItem = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenu = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* font-size: 15px; */
  color: ${(props) => props.theme.colors.black};
`;

const StyledReviewTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 20px; */
  color: ${(props) => props.theme.colors.main};
  /* margin-top: 10px; */
`;

const StyledReviewContainer = styled.div`
  height: 30%;
  overflow: scroll;
  padding: 10px;
`;

const StyledReviewItem = styled.div`
  width: 100%;
  /* overflow: hidden; */
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledReview = styled.a`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
  white-space: nowrap; /* 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 내용 숨김 처리 */
  text-overflow: ellipsis; /* 넘치는 내용에 "..." 추가 */
`;

const StyledCloseButton = styled.button`
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.black};
  border-radius: 5px;
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
};
