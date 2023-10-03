import styled from 'styled-components';

const StyledReviewContainer = styled.div`
  /* border: 5px solid ${(props) => props.theme.colors.main}; */
  height: 200px;
  margin-top: 2px;
  overflow: auto;
  border-radius: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledReviewText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 18px;
`;

const StyledReview = styled.div``;

export { StyledReviewContainer, StyledReviewText, StyledReview };
