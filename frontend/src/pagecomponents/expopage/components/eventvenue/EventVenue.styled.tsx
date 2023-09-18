import styled from 'styled-components';

const StyledEVBannerContainer = styled.div`
  margin: 30px 200px;
  padding: 20px 70px;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
`;
const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 15px;
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBannerTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 40px;
`;

const StyledBannerContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
`;

const StyledBannerLink = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 36px;
  border-bottom: 2px ${(props) => props.theme.colors.white} solid;
`;
export {
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
};
