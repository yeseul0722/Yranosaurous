import {
  StyledTicketContainer,
  StyledTicketLeftContainer,
  StyledImageContainer,
  StyledImage,
  StyledTiketTitle,
  StyledTicetInfoBox,
  StyledText,
  StyledReserve,
  StyledPrice,
  StyledButtonContainer,
  StyledButtonBox,
  StyledWhitebox,
} from './Ticket.styled';
import Button from '../../../../components/button';
import { Link } from 'react-router-dom';
import useShowOnScroll from '../../../../hooks/expo/useShowOnScroll';
const Ticket = () => {
  const { ref, showAnimation } = useShowOnScroll();
  return (
    <StyledTicketContainer>
      <StyledWhitebox ref={ref}>
        <StyledTicketLeftContainer>
          <StyledImageContainer showAnimation={showAnimation}>
            <StyledImage src="expo_main_pic/TicketImage.png" alt="ticket" />
          </StyledImageContainer>
        </StyledTicketLeftContainer>

        <div>
          <StyledTiketTitle>공룡엑스포 티켓안내</StyledTiketTitle>
          <StyledTicetInfoBox>
            <StyledText size="30px">| 사전 예매</StyledText>
            <StyledText size="22px" style={{ paddingLeft: '20px' }}>
              성인 : 14000 소인 : 7000
            </StyledText>
          </StyledTicetInfoBox>
          <StyledTicetInfoBox>
            <StyledText size="30px">| 일반 예매</StyledText>
            <StyledText size="22px" style={{ paddingLeft: '20px' }}>
              성인 : 18000 소인 : 12000
            </StyledText>
          </StyledTicetInfoBox>
          <StyledButtonContainer>
            <Link to="https://www.itfuntour.com/shop/list.php?ca_id=gn30" style={{ textDecoration: 'none' }}>
              <div style={{ width: '200px' }}>
                <Button use="ticket" label="티켓 예매"></Button>
              </div>
            </Link>
          </StyledButtonContainer>
        </div>
      </StyledWhitebox>
    </StyledTicketContainer>
  );
};

export default Ticket;
