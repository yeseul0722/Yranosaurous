import styled from 'styled-components';

const StyledDsDetailPage = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background-color: #ffffff2c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledDsDetailWindow = styled.div`
  background-color: #000020c0;
  border-radius: 30px;
  overflow: hidden;
  width: 60%;
  height: 80%;
  display: flex;
`;

const StyledDsDetailCloseButton = styled.div`
  border: 1px solid yellow;
`;

const StyledDsDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

const StyledDsDetailImg = styled.img.attrs<any>((props) => {})`
  width: 40%;
`;

const StyledDetailTitle = styled.div`
  border: 1px solid red;
`;

const StyledDetailTitleText = styled.div`
  border-bottom: 5px solid white;
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  text-align: left;
  margin: 2rem;
  width: 25rem;
`;

const StyledDeTailContent = styled.div`
  border: 1px solid bule;
`;

const StyledDeTailContentText = styled.div`
  border: 1px solid yellowgreen;
  color: #ffffff;
  width: 25rem;
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
