import styled from 'styled-components';

const StyledTicketContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid ${(props) => props.theme.colors.white};
  border-radius: 30px;
`;

const StyledTiketTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  /* padding-left: 100px; */
`;

const StyledPrice = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 20px; */
  color: ${(props) => props.theme.colors.white};
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
const StyledBannerTitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3%;
  justify-content: center;
`;
const StyledBannerImageContainer = styled.div`
  max-width: 31px;
  max-height: 42px;
`;

const StyledBannerImg = styled.img.attrs<any>((props) => ({
  src: '/mobile/char2.png',
}))`
  width: 100%;
  height: 100%;
`;
export {
  StyledTicketContainer,
  StyledTiketTitle,
  StyledReserve,
  StyledPrice,
  StyledTicetInfoContainer,
  StyledButtonContainer,
  StyledButtonBox,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
};
