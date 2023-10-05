import styled from 'styled-components';

const StyledMenuContainer = styled.div`
  /* border: 5px solid ${(props) => props.theme.colors.main}; */
  height: 300px;
  margin-bottom: 2px;
  overflow: auto;
  border-radius: 5px;
  /* background-color: ${(props) => props.theme.colors.light}; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMenuText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 18px;
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StyledMenuName = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.boldfont};
  margin-left: 7px;
  color: ${(props) => props.theme.colors.main};
`;

const StyledPrice = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.black};
  margin-right: 7px;
`;

export { StyledMenuContainer, StyledMenuText, StyledMenu, StyledPrice, StyledMenuName };
