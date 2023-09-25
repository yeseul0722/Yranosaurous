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
  StyledContentContainer,
  StyeldContent,
} from './TourModal.styled';

const TourModal = (props: any) => {
  return (
    <Modal>
      <ModalWindow>
        <ModalContainer>
          <ModalTopContainer>
            <ModalImgContainer>
              <ModalImage src={props.tourDetail.imgUrl} alt={props.tourDetail.name} />
            </ModalImgContainer>
            <ModalTopContent>
              <ModalTopTitle>{props.tourDetail.name}</ModalTopTitle>
              <StyledAddressContainer>{props.tourDetail.address}</StyledAddressContainer>
            </ModalTopContent>
          </ModalTopContainer>
          <StyledContentContainer>
            <StyeldContent>{props.tourDetail.content}</StyeldContent>
          </StyledContentContainer>
        </ModalContainer>
        <StyledCloseButton onClick={props.handleOpen}>닫기</StyledCloseButton>
      </ModalWindow>
    </Modal>
  );
};

export default TourModal;
