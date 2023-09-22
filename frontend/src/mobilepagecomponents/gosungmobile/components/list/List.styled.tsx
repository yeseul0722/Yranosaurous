import styled from 'styled-components';

const StyledListContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-top-right-radius: 48px;
  border-top-left-radius: 48px;
`;

const StyledListTopContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
`;

const StyledListButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: hidden;
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.regularfont};

  cursor: pointer;
`;

export { StyledListContainer, StyledListTopContainer, StyledListButtonContainer, StyledButtonBox, StyledButton };
