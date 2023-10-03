import React from 'react';
import {
  StyledTicketContainer,
  StyledTiketTitle,
  StyledTicetInfoContainer,
  StyledReserve,
  StyledPrice,
  StyledButtonContainer,
  StyledButtonBox,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
} from './Ticket.styled';
import Button from '../../../../components/button';
const Ticket = () => {
  return (
    <StyledTicketContainer>
      <StyledBannerTitleContainer>
        <StyledBannerImageContainer>
          <StyledBannerImg></StyledBannerImg>
        </StyledBannerImageContainer>
        <StyledTiketTitle> 티켓안내</StyledTiketTitle>
      </StyledBannerTitleContainer>
      <div style={{ width: '90%', position: 'relative' }}>
        <StyledTicetInfoContainer>
          <StyledReserve>| 사전 예매</StyledReserve>
          <StyledPrice>성인 : 14000 소인 : 7000</StyledPrice>
        </StyledTicetInfoContainer>
        <StyledTicetInfoContainer>
          <StyledReserve>| 일반 예매</StyledReserve>
          <StyledPrice>성인 : 18000 소인 : 12000</StyledPrice>
        </StyledTicetInfoContainer>
        <StyledButtonBox>
          <Button use="mobileticket" label="예매하기"></Button>
        </StyledButtonBox>
      </div>
      <StyledButtonContainer></StyledButtonContainer>
    </StyledTicketContainer>
  );
};

export default Ticket;
