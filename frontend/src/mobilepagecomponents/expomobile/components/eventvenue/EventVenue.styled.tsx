import styled from 'styled-components';

const StyledEVBannerContainer = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.main};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBannerTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  /* font-size: 40px; */
`;

const StyledBannerContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  /* font-size: 15px; */
`;

const StyledBannerLink = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  /* font-size: 36px; */
  border-bottom: 2px ${(props) => props.theme.colors.white} solid;
  cursor: pointer;
  padding-bottom: 5px;
`;
export {
  StyledEVBannerContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBannerTitle,
  StyledBannerContent,
  StyledBannerLink,
};
