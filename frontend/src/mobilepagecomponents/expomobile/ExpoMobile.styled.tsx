import styled from 'styled-components';

const StyledExpoMobilePage = styled.div`
  width: 100vw;
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  background-color: ${(props) => props.theme.colors.main};
`;

export { StyledExpoMobilePage };
