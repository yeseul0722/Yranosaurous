import styled from 'styled-components';

const StyledKoreaDsPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.night};
`;

const StyledKoreaDsTitle = styled.div`
  border: 1px solid red;
  padding: 5rem;
`;

const StyledKoreaDsTitleText = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-size: 70px;
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledKoreaDsContentText = styled.div`
  /* border: 1px solid blue; */
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  padding: 1rem;
`;

export { StyledKoreaDsPage, StyledKoreaDsTitle, StyledKoreaDsTitleText, StyledKoreaDsContentText };
