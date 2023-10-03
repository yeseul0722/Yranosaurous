import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.menu};
`;

const StyledEVBannerContainer = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.menu};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */
`;

const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
const StyledBannerTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 24px;
`;

const StyledBannerContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 12px;
`;

const StyledBannerLink = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  /* font-size: 36px; */
  border-bottom: 2px ${(props) => props.theme.colors.main} solid;
  cursor: pointer;
  padding-bottom: 5px;
`;
export {
  StyledContainer,
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
};
