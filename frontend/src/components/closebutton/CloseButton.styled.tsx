import styled from 'styled-components';

const StyledCloseButton = styled.div`
  background-color: white;
  width: 30px;
  height: 60px;
  border: 1px solid lightgray;
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

export { StyledCloseButton };
