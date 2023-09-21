import styled from 'styled-components';

const StyledDsDetailPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000020c0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledDsDetailWindow = styled.div`
  background-color: #000020;
  border-radius: 30px;
  overflow: hidden;
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;

const StyledDsDetailCloseButton = styled.div`
  color: #ffffff;
  padding-top: 1.5rem;
  padding-right: 1rem;
  font-size: 30px;
`;

const StyledDsDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

const StyledDsDetailImg = styled.img`
  width: 40%;
`;

const StyledDetailTitle = styled.div``;

const StyledDetailTitleText = styled.div`
  border-bottom: 5px solid white;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  text-align: left;
  margin: 2rem;
  width: 25rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

const StyledDeTailContent = styled.div`
  display: flex;
  justify-content: center;
  overflow: scroll;
  /* scroll-snap-type: y mandatory; */
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledDeTailContentText = styled.div`
  color: #ffffff;
  width: 25rem;
  margin-left: 1rem;
  letter-spacing: 0.1rem;
  text-align: left;
`;

export {
  StyledDsDetailPage,
  StyledDsDetailWindow,
  StyledDsDetailCloseButton,
  StyledDsDetailImg,
  StyledDsDetailBody,
  StyledDetailTitle,
  StyledDetailTitleText,
  StyledDeTailContent,
  StyledDeTailContentText,
};
