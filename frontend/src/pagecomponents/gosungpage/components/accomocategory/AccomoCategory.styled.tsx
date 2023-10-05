import styled from 'styled-components';

const StyledAccomoCategorySection = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledAccomoCategoryContainer = styled.div`
  height: 70px;

  justify-content: center;
  align-items: center;
`;

const StyledAccomoCategoryBox = styled.div`
  height: auto;
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

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
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledAccomoCategoryWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 21px;
`;
export {
  StyledAccomoCategoryList,
  StyledAccomoCategoryWrap,
  StyledAccomoCategorySection,
  StyledAccomoCategoryBox,
  StyledAccomoCategoryContainer,
};
