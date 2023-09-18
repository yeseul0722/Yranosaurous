import React from 'react';
import {
  StyledTicketContainer,
  StyledTicketLeftContainer,
  StyledTicketRightContainer,
  StyledImageContainer,
  StyledImage,
} from './Ticket.styled';
const Ticket = () => {
  return (
    <StyledTicketContainer>
      <StyledTicketLeftContainer>
        <StyledImageContainer>
          <StyledImage src="expo_main_pic/TicketImage.png" alt="ticket" />
        </StyledImageContainer>
      </StyledTicketLeftContainer>
      <StyledTicketRightContainer></StyledTicketRightContainer>
    </StyledTicketContainer>
  );
};

export default Ticket;
