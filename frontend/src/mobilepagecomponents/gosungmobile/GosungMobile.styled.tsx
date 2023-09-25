import styled from 'styled-components';

const StyledosunMobilePage = styled.div``;

const StyledListContainer = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0px;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

const StyledHome = styled.a`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 100;
`;
export { StyledosunMobilePage, StyledListContainer, StyledList, StyledHome };
