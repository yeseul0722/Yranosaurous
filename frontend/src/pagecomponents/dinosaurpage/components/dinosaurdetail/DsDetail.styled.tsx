import styled from 'styled-components';

const StyledDsDetailPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000020be;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledDsDetailWindow = styled.div`
  background-color: #a5a5a5;
  border-radius: 30px;
  overflow: hidden;
  width: 65%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyldDsDetailWindowBorder = styled.div`
  border: 3px solid ${(props) => props.theme.colors.white};
  background-color: #a5a5a5;
  width: 96%;
  height: 93%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const StyledDsDetailCloseButton = styled.div.attrs<any>((props) => ({}))`
  color: #ffffff;
  padding-top: 1.5rem;
  padding-right: 1rem;
  font-size: 30px;
  cursor: pointer;
`;

const StyledDsDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

const StyledDsDetailInfoContainer = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 15px;
`;

const StyledDsDetailImg = styled.img`
  border-radius: 10px;
  width: 21rem;
  margin-left: 10px;
  object-fit: contain;
`;

const StyledDetailTitleBox = styled.div`
  border: 1px solid red;
  display: flex;
`;

const StyledDetailTitle = styled.div`
  /* border-bottom: 5px solid ${(props) => props.theme.colors.white}; */
  /* margin-left: 10px; */
  margin-bottom: 10px;
  width: 20rem;
`;

const StyledDetailTitleText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: left;
  padding-left: 1rem;
  cursor: default;
`;

const StyledDetailEnTitleText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  text-align: left;
  padding-left: 1rem;
  cursor: default;
`;

const StyledDsDetailBox = styled.div`
  margin-top: 1rem;
`;

const StyledDetailContentTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  text-align: left;
  padding-left: 1rem;
  cursor: default;
`;
const StyledDetailContentText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  text-align: left;
  padding-left: 1.5rem;
  cursor: default;
`;

const StyledDeTailSummary = styled.div`
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  overflow: scroll;

  margin: 0.8rem;
  justify-content: flex-start;
  flex-direction: column;
  /* width: 25rem; */

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledDeTailSummaryText = styled.div`
  font-family: ${(props) => props.theme.fonts.dinoregularfont};
  color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  text-align: left;
  line-height: 150%;
  cursor: default;
`;

export {
  StyledDsDetailPage,
  StyledDsDetailWindow,
  StyldDsDetailWindowBorder,
  StyledDsDetailCloseButton,
  StyledDsDetailInfoContainer,
  StyledDsDetailImg,
  StyledDsDetailBox,
  StyledDsDetailBody,
  StyledDetailTitleBox,
  StyledDetailTitle,
  StyledDetailTitleText,
  StyledDetailEnTitleText,
  StyledDetailContentTitle,
  StyledDetailContentText,
  StyledDeTailSummary,
  StyledDeTailSummaryText,
};
