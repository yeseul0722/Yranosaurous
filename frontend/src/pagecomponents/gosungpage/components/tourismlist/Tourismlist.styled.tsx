import styled from 'styled-components';

const StyledTourismListContainer = styled.div``;

const StyledTourismContainer = styled.div<{ isSelected: boolean }>`
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.light : props.theme.colors.white)};
  cursor: pointer;
`;

const StyledTourismInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledTourismName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 17px;
`;

const StyledTourismImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  margin: 10px;
  border: 7px solid ${(props) => props.theme.colors.main};
`;

export { StyledTourismContainer, StyledTourismImg, StyledTourismInfo, StyledTourismName, StyledTourismListContainer };
