import styled from 'styled-components';

const StyldTourCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const StyledTourCategoryButton = styled.button`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: hidden;
  width: 100px;

  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export { StyldTourCategoryContainer, StyledTourCategoryButton };
