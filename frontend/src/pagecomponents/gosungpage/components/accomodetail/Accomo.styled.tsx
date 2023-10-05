import styled from 'styled-components';

const StyledAccommoDetailContainer = styled.div`
  /* height: 100%; */
  width: 360px;
  display: flex;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
`;

const StyledAccommoImgWrap = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const StyledAccommoDetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledAccommoName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
`;

const StyledAccomoInfo = styled.div`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledAccommoAdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAccommoAd = styled.div`
  margin-left: 10px;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const StyledLocationIcon = styled.div`
  background-image: url('/gosung/location.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

const StyledOkIcon = styled.div`
  background-image: url('/gosung/okay.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

const StyledBanIcon = styled.div`
  background-image: url('/gosung/ban.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
`;

const StyledChild = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export {
  StyledAccommoAd,
  StyledAccommoAdContainer,
  StyledAccommoDetailContainer,
  StyledAccommoDetailImg,
  StyledAccommoImgWrap,
  StyledAccommoName,
  StyledAccomoInfo,
  StyledRating,
  StyledLocationIcon,
  StyledBanIcon,
  StyledOkIcon,
  StyledChild,
};
