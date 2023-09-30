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
  StyledAddressTitleContainer,
  StyledAddressTitle,
  StyledAddress,
  StyledCloseButtonContainer,
  StyledCloseButtonBox,
  StyledImgaContainer,
  StyledMenuReviewContainer,
} from './TourModal.styled';

const TourModal = (props: any) => {
  return (
    <Modal>
      <ModalWindow>
        <ModalContainer>
          <StyledCloseButtonContainer>
            <StyledCloseButtonBox onClick={props.handleOpen}>
              <StyledCloseButton></StyledCloseButton>
            </StyledCloseButtonBox>
          </StyledCloseButtonContainer>
          <ModalTopContainer>
            <ModalTopTitle>{props.tourDetail.name}</ModalTopTitle>
          </ModalTopContainer>
          <StyledMenuReviewContainer>
            <StyledImgaContainer>
              <ModalImage src={props.tourDetail.imgUrl} />
            </StyledImgaContainer>
            <StyledAddressTitleContainer>
              <StyledAddressTitle>| 주소</StyledAddressTitle>
            </StyledAddressTitleContainer>
            <StyledAddressContainer>
              <StyledAddress>{props.tourDetail.address}</StyledAddress>
            </StyledAddressContainer>
            <StyledContentContainer>
              <StyeldContent>{props.tourDetail.content}</StyeldContent>
            </StyledContentContainer>
          </StyledMenuReviewContainer>
        </ModalContainer>
      </ModalWindow>
    </Modal>
  );
};

export default TourModal;
