import React from 'react';
import {
  StyledKoreaDsPage,
  StyledKoreaDsTitle,
  StyledKoreaDsTitleText,
  StyledKoreaDsContentText,
  StyledKoreaDsImg,
  StyledKoreaDsImgContainer,
} from './koreaDsPage.styled';

const KoreaDsPage = () => {
  return (
    <StyledKoreaDsPage>
      <StyledKoreaDsTitle>
        <StyledKoreaDsTitleText>한국의 공룡들,</StyledKoreaDsTitleText>
        <StyledKoreaDsContentText>
          코리아노사우루스 보성엔시스, 코리아케라톱스
          <br />
          그리고 부경고사우루스까지
        </StyledKoreaDsContentText>
      </StyledKoreaDsTitle>
      <StyledKoreaDsImgContainer>
        <StyledKoreaDsImg src="/dinosaur/koDs/korea4.png" alt="ceratops"></StyledKoreaDsImg>
      </StyledKoreaDsImgContainer>
    </StyledKoreaDsPage>
  );
};

export default KoreaDsPage;
