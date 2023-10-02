import useGuideStore from '../../../../stores/guide/useGuideStore';
import {
  Modal,
  ModalWindow,
  ModalContainer,
  ModalTopContainer,
  ModalImage,
  ModalTopTitle,
  StyledCloseButton,
  StyledContentContainer,
  StyeldContent,
  StyledCloseButtonContainer,
  StyledCloseButtonBox,
  StyledImgaContainer,
  StyledMenuReviewContainer,
} from './PlaceModal.styled';

const PlaceModal = (props: any) => {
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
            <ModalTopTitle>{props.place.name}</ModalTopTitle>
          </ModalTopContainer>
          <StyledMenuReviewContainer>
            <StyledContentContainer>
              <StyeldContent>{props.place.content}</StyeldContent>
            </StyledContentContainer>
            <StyledImgaContainer>
              <ModalImage src={props.place.imgAddress} />
            </StyledImgaContainer>
          </StyledMenuReviewContainer>
        </ModalContainer>
      </ModalWindow>
    </Modal>
  );
};

export default PlaceModal;
