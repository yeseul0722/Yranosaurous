import styled from 'styled-components';

const StyledCloseButton = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 30px;
  height: 60px;
  border-bottom: 3px solid ${(props) => props.theme.colors.lightgray};
  border-right: 2px solid ${(props) => props.theme.colors.lightgray};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  z-index: 3;
  position: absolute;
  cursor: pointer;
  top: 50%;
`;

const StyledBackIcon = styled.div`
  background-image: url('/gosung/back.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

const StyledForwardIcon = styled.div`
  background-image: url('/gosung/forward.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

export { StyledCloseButton, StyledBackIcon, StyledForwardIcon };
