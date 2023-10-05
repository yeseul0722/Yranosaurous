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
  const src = props.place.imgAddress ? props.place.imgAddress : '/map/xdino.png';
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
              <ModalImage src={src} />
            </StyledImgaContainer>
          </StyledMenuReviewContainer>
        </ModalContainer>
      </ModalWindow>
    </Modal>
  );
};

export default PlaceModal;
