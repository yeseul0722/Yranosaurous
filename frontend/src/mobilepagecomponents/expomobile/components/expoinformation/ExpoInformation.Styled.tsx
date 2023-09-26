import styled from 'styled-components';

const StyledExpoInfoPage = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

const StyledExpoInfoContainer = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
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
`;

const StyledExpoInfoTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  /* font-size: 45px; */
`;

const StyledExpoInfoContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  color: ${(props) => props.theme.colors.main};
  /* font-size: 26px; */
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
  color: ${(props) => props.theme.colors.black};
  /* font-size: 26px; */
`;

const StyledExpoInfoContentContent = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.black};
  /* font-size: 18px; */
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
};
