import styled from 'styled-components';

const StyledExpoInfoPage = styled.div`
  display: flex;
  margin-top: 60px;
  margin-right: 60px;
  gap: 15px;
`;

const StyledExpoInfoContainer = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
`;
const StyledExpoInfoPoster = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const StyledExpoInfoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledExpoInfoTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 45px;
`;

const StyledExpoInfoContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 26px;
`;

const StyledExpoInfoContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 40px;
  flex-direction: column;
  align-items: center;
`;

const StyledExpoInfoTitleContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 20px;
  min-width: 600px;
`;

const StyledExpoInfoContentTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.black};
  font-size: 26px;
`;

const StyledExpoInfoContentContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
`;

const StyledImageContainer = styled.div`
  width: 280px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.main};
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))``;
export {
  StyledExpoInfoPage,
  StyledExpoInfoContainer,
  StyledExpoInfoPoster,
  StyledExpoInfoTitleContainer,
  StyledExpoInfoTitle,
  StyledExpoInfoContent,
  StyledExpoInfoContentContainer,
  StyledExpoInfoTitleContent,
  StyledExpoInfoContentTitle,
  StyledExpoInfoContentContent,
  StyledImageContainer,
  StyledImage,
};
