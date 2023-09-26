import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTourCategoryButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-height: 20vh;
  overflow: scroll;
`;

const StyledTourCategoryButton = styled.button.attrs<any>((props) => ({}))`
  border-radius: 20px;
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.night : props.theme.colors.light)};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: hidden;

  font-family: ${(props) => props.theme.fonts.regularfont};
`;
export { StyldTourCategoryContainer, StyledTourCategoryButton, StyledTourCategoryButtonContainer };
