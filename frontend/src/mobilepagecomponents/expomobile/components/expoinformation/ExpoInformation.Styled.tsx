import styled from 'styled-components';

const StyledExpoInfoPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledExpoInfoContainer = styled.div`
  /* flex: 2; */
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledExpoInfoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StyledExpoInfoTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
`;

const StyledExpoInfoContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
`;

const StyledExpoInfoContentContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const StyledExpoInfoTitleContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  margin-bottom: 20px;
  width: 100%;
`;

const StyledExpoInfoContentTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;

const StyledExpoInfoContentContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;

const StyledBannerTitleContainer = styled.div`
  width: 100%;
  display: flex;
`;
const StyledBannerImageContainer = styled.div`
  max-width: 31px;
  max-height: 42px;
`;

const StyledBannerImg = styled.img.attrs<any>((props) => ({
  src: '/mobile/char4.png',
}))`
  width: 100%;
  height: 100%;
`;
export {
  StyledExpoInfoPage,
  StyledExpoInfoContainer,
  StyledExpoInfoTitleContainer,
  StyledExpoInfoTitle,
  StyledExpoInfoContent,
  StyledExpoInfoContentContainer,
  StyledExpoInfoTitleContent,
  StyledExpoInfoContentTitle,
  StyledExpoInfoContentContent,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
};
