import styled from 'styled-components';

const StyledTicketContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledTiketTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 60px; */
  color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  /* padding-left: 100px;
  margin-bottom: 50px; */
`;

const StyledTicetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

const StyledReserve = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 30px; */
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  /* padding-left: 100px; */
`;

const StyledPrice = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 20px; */
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  /* padding-left: 100px; */
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin-left: 100px; */
`;

const StyledButtonBox = styled.div`
  width: 100px;
  position: absolute;
  right: 5%;
  bottom: 10%;
`;

export {
  StyledTicketContainer,
  StyledTiketTitle,
  StyledReserve,
  StyledPrice,
  StyledTicetInfoContainer,
  StyledButtonContainer,
  StyledButtonBox,
};
