import styled from 'styled-components';

const StyledAccomoCategoryList = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  margin: 3px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.regularfont};
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.lightgray};
  /* background-color: white; */
  :hover,
  :active {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledAccomoCategoryWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;
export { StyledAccomoCategoryList, StyledAccomoCategoryWrap };
