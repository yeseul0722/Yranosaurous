import {
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
} from './LodgmentModal.styled';

const LodgmentModal = (props: any) => {
  console.log(props.lodgmentDetail);
  return (
    <Modal>
      <ModalWindow>
        <ModalContainer>
          <ModalTopContainer>
            <ModalImgContainer>
              <ModalImage src={props.lodgmentDetail.imgAddress} alt={props.lodgmentDetail.name} />
            </ModalImgContainer>
            <ModalTopContent>
              <ModalTopTitle>{props.lodgmentDetail.name}</ModalTopTitle>
              <StyledAddressContainer>{props.lodgmentDetail.address}</StyledAddressContainer>
              <StyledRatinContainer>
                <StyledStar>★</StyledStar>
                <StyledRating>{props.lodgmentDetail.rating}</StyledRating>
              </StyledRatinContainer>
            </ModalTopContent>
          </ModalTopContainer>
        </ModalContainer>
        <StyledCloseButton onClick={props.handleOpen}>닫기</StyledCloseButton>
      </ModalWindow>
    </Modal>
  );
};

export default LodgmentModal;
