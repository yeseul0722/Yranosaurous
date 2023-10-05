import styled from 'styled-components';

const StyledKakaoMapContainer = styled.div`
  position: relative;
`;
const StyledInfoWindow = styled.div`
  padding: 5px;
  border: 3px solid ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;
export { StyledKakaoMapContainer, StyledInfoWindow };
