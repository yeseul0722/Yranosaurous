import React from 'react';
import {
  StyledTicketContainer,
  StyledTicketLeftContainer,
  StyledTicketRightContainer,
  StyledImageContainer,
  StyledImage,
  StyledTiketTitle,
  StyledTicetInfoContainer,
  StyledReserve,
  StyledPrice,
  StyledButtonContainer,
  StyledButtonBox,
} from './Ticket.styled';
import Button from '../../../../components/button';
import { Link } from 'react-router-dom';
const Ticket = () => {
  return (
    <StyledTicketContainer>
      <StyledTicketLeftContainer>
        <StyledImageContainer>
          <StyledImage src="expo_main_pic/TicketImage.png" alt="ticket" />
        </StyledImageContainer>
      </StyledTicketLeftContainer>
      <StyledTicketRightContainer>
        <StyledTiketTitle>공룡엑스포 티켓안내</StyledTiketTitle>
        <StyledTicetInfoContainer>
          <StyledReserve>| 사전 예매</StyledReserve>
          <StyledPrice>성인 : 14000 소인 : 7000</StyledPrice>
        </StyledTicetInfoContainer>
        <StyledTicetInfoContainer>
          <StyledReserve>| 일반 예매</StyledReserve>
          <StyledPrice>성인 : 18000 소인 : 12000</StyledPrice>
        </StyledTicetInfoContainer>
        <StyledButtonContainer>
          <Link to="https://www.itfuntour.com/shop/list.php?ca_id=gn30" style={{ textDecoration: 'none' }}>
            <StyledButtonBox>
              <Button use="ticket" label="예매하기"></Button>
            </StyledButtonBox>
          </Link>
        </StyledButtonContainer>
      </StyledTicketRightContainer>
    </StyledTicketContainer>
  );
};

export default Ticket;
