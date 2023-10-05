import styled from 'styled-components';

const StyledReviewContainer = styled.div`
  /* border: 5px solid ${(props) => props.theme.colors.main}; */
  height: 300px;
  margin-top: 2px;
  overflow: auto;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.light};
  border: 5px solid ${(props) => props.theme.colors.main};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledReviewText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 18px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

const StyledReview = styled.div`
  padding: 3px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.lightgray};
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regularfont};
  margin: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;

export { StyledReviewContainer, StyledReviewText, StyledReview, StyledLink };
