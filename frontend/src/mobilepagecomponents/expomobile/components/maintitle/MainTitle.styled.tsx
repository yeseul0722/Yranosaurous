import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 20%;
`;
const StyledBannerTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledBannerImageContainer = styled.div`
  max-width: 31px;
  max-height: 42px;
`;

const StyledBannerImg = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;

const StyledExpoTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
`;

const StyledContentContainer = styled.div``;
const StyledContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;
const StyledContent2 = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.black};
  font-size: 12px;
`;
const StyledContentContainer2 = styled.div`
  display: flex;
  justify-content: center;
`;
export {
  StyledContainer,
  StyledBannerTitleContainer,
  StyledBannerImageContainer,
  StyledBannerImg,
  StyledExpoTitle,
  StyledContentContainer,
  StyledContent,
  StyledContent2,
  StyledContentContainer2,
};
