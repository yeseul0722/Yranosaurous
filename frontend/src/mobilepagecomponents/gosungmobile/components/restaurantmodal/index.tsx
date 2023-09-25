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
} from './Modal.styled';

const restaurantmodal = (props: any) => {
  return (
    <Modal>
      <ModalWindow>
        <ModalContainer>
          <ModalTopContainer>
            <ModalImgContainer>
              <ModalImage src={props.restaurantDetail.imgAddress} alt={props.restaurantDetail.storeName} />
            </ModalImgContainer>
            <ModalTopContent>
              <ModalTopTitle>{props.restaurantDetail.storeName}</ModalTopTitle>
              <StyledAddressContainer>{props.restaurantDetail.address}</StyledAddressContainer>
              <StyledRatinContainer>
                <StyledStar>★</StyledStar>
                <StyledRating>{props.restaurantDetail.rating}</StyledRating>
              </StyledRatinContainer>
              <StyledHashTagContainer>
                {props.restaurantDetail.hashTagList.map((tag: any) => {
                  return <StyledHashTag key={tag.id}>#{tag.name}</StyledHashTag>;
                })}
              </StyledHashTagContainer>
            </ModalTopContent>
          </ModalTopContainer>

          <StyledMenuTitle>메뉴</StyledMenuTitle>
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

          <StyledReviewTitle>리뷰</StyledReviewTitle>
          <StyledReviewContainer>
            {props.restaurantDetail.reviewResponseList.map((review: any) => {
              return (
                <StyledReviewItem key={review.id}>
                  <StyledReview href={review.reviewAddress}>{review.title}</StyledReview>
                </StyledReviewItem>
              );
            })}
          </StyledReviewContainer>
        </ModalContainer>
        <StyledCloseButton onClick={props.handleOpen}>닫기</StyledCloseButton>
      </ModalWindow>
    </Modal>
  );
};

export default restaurantmodal;
