import {
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
} from './Modal.styled';

const restaurantmodal = (props: any) => {
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
            <StyledHashTagContainer>
              {props.restaurantDetail.hashTagList.map((tag: any) => {
                return <StyledHashTag key={tag.id}>#{tag.name}</StyledHashTag>;
              })}
            </StyledHashTagContainer>
            <ModalTopTitle>{props.restaurantDetail.storeName}</ModalTopTitle>
            {/* <ModalTopContent>
              <StyledRatinContainer>
                <StyledStar>★</StyledStar>
                <StyledRating>{props.restaurantDetail.rating}</StyledRating>
              </StyledRatinContainer>
            </ModalTopContent> */}
          </ModalTopContainer>
          <StyledMenuReviewContainer>
            <StyledImgaContainer>
              <ModalImage src={props.restaurantDetail.imgAddress} alt={props.restaurantDetail.storeName} />
            </StyledImgaContainer>
            <StyledAddressTitleContainer>
              <StyledAddressTitle>| 주소</StyledAddressTitle>
            </StyledAddressTitleContainer>
            <StyledAddressContainer>
              <StyledAddress>{props.restaurantDetail.address}</StyledAddress>
            </StyledAddressContainer>
            <StyledMenuTitleContainer>
              <StyledMenuTitle>| 메뉴</StyledMenuTitle>
            </StyledMenuTitleContainer>
            <StyledMenuContainer>
              {props.restaurantDetail.menuResponseList.map((menu: any) => {
                return (
                  <StyledMenuItem key={menu.id}>
                    <StyledMenu>{menu.name}</StyledMenu>
                    <StyledMenu>{menu.price}</StyledMenu>
                  </StyledMenuItem>
                );
              })}
            </StyledMenuContainer>
            <StyledReviewTitleContainer>
              <StyledReviewTitle>| 리뷰</StyledReviewTitle>
            </StyledReviewTitleContainer>
            <StyledReviewContainer>
              {props.restaurantDetail.reviewResponseList.map((review: any, index: any) => {
                return (
                  <StyledReviewItem key={review.id} index={index}>
                    <StyledReview index={index} href={review.reviewAddress}>
                      {review.title}
                    </StyledReview>
                  </StyledReviewItem>
                );
              })}
            </StyledReviewContainer>
          </StyledMenuReviewContainer>
        </ModalContainer>
      </ModalWindow>
    </Modal>
  );
};

export default restaurantmodal;
