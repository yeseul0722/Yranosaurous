import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTourCategoryButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 0px 20px;
  max-height: 20vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledTourCategoryButton = styled.button.attrs<any>((props) => ({}))`
  border-radius: 20px;
  background-color: ${(props) => (props.name === props.select ? props.theme.colors.white : props.theme.colors.main)};
  color: ${(props) => (props.name === props.select ? props.theme.colors.black : props.theme.colors.white)};
  font-size: 13px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.name === props.select ? `2px solid ${props.theme.colors.black}` : 'hidden')};
  /* width: 100px; */
  /* flex: 1; */

  font-family: ${(props) => props.theme.fonts.boldfont};
`;

export { StyldTourCategoryContainer, StyledTourCategoryButtonContainer, StyledTourCategoryButton };
