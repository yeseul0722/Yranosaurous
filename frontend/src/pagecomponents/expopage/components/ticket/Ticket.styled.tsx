import styled from 'styled-components';

const StyledTicketContainer = styled.div`
  display: flex;
  margin: 0px 200px 0px 200px;
  min-width: 1120px;
`;

const StyledTicketLeftContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.lightgray} 50%,
    ${(props) => props.theme.colors.main} 50%
  );
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 90%;
  height: 90%;
`;

const StyledTicketRightContainer = styled.div`
  flex: 3;
`;

const StyledTiketTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 60px;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
  margin-bottom: 50px;
`;

const StyledTicetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const StyledReserve = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
`;

const StyledPrice = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
`;

export {
  StyledTicketContainer,
  StyledTicketLeftContainer,
  StyledTicketRightContainer,
  StyledImageContainer,
  StyledImage,
  StyledTiketTitle,
  StyledReserve,
  StyledPrice,
  StyledTicetInfoContainer,
};
