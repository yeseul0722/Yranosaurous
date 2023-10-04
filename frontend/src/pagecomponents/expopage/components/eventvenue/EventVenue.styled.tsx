import styled from 'styled-components';

const StyledEVBannerContainer = styled.div`
  margin: 100px auto;
  padding: 20px 0px;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  width: 1120px;
`;
const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 15px;
  padding: 0px 70px;
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 70px;
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

const StyledBannerLink = styled.a`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 36px;
  border-bottom: 2px ${(props) => props.theme.colors.white} solid;
  cursor: pointer;
  padding-bottom: 5px;
  text-decoration: none;
`;
export {
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
};
