import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTourCategoryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: scroll;
  flex-wrap: wrap;
`;

const StyledTourCategoryButton = styled.button.attrs<any>((props) => ({}))`
  /* border-radius: 20px; */
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.menu : props.theme.colors.main)};
  color: ${(props) => (props.name === props.select ? props.theme.colors.main : props.theme.colors.white)};
  font-size: 15px;
  padding-bottom: 10px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border: hidden;
  width: 100px;
  flex: 1;

  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export { StyldTourCategoryContainer, StyledTourCategoryButtonContainer, StyledTourCategoryButton };
