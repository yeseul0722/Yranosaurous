import styled from 'styled-components';

const StyledTicketContainer = styled.div`
  display: flex;
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

export {
  StyledTicketContainer,
  StyledTicketLeftContainer,
  StyledTicketRightContainer,
  StyledImageContainer,
  StyledImage,
};
