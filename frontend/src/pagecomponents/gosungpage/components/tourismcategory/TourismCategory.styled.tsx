import styled from 'styled-components';

const StyledTourismCategorySection = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTourismCategoryContainer = styled.div`
  height: 130px;
  width: 360px;
  /* border: 1px solid; */
  justify-content: center;
  align-items: center;
`;

const StyledTourismCategoryBox = styled.div`
  height: auto;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const StyledTourismCategoryWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 21px;
`;

const StyledTourismCategoryList = styled.button`
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

export {
  StyledTourismCategoryBox,
  StyledTourismCategoryContainer,
  StyledTourismCategoryList,
  StyledTourismCategorySection,
  StyledTourismCategoryWrap,
};
