import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledSplitPage,
  StyledGoCover,
  StyledGoDinosaur,
  StyledGoExpo,
  StyledTitleText,
  StyledContent,
  StyledGoDinosaurButton,
  StyledGoExpoButton,
} from './splitPage.styled';

const SplitPage = () => {
  const goDinosaur = () => {
    console.log('ds');
  };
  const goExpo = () => {
    console.log('expo');
  };
  return (
    <StyledSplitPage>
      <StyledGoDinosaur>
        <StyledTitleText>| 이론편</StyledTitleText>
        <StyledContent>
          전 세계의 공룡을 온라인을 통해서 만나보세요! <br />
          세계공룡들의 위치와 정보, 그리고 한국의 공룡 이야기까지
        </StyledContent>
        <StyledGoDinosaurButton>
          <Link to="/dinosaur" style={{ textDecoration: 'none', color: '#F3F8F8' }}>
            이론편으로 이동하기
          </Link>
        </StyledGoDinosaurButton>
      </StyledGoDinosaur>
      <StyledGoExpo>
        <StyledTitleText>| 실전편</StyledTitleText>
        <StyledContent>
          직접 공룡들을 만나러 가볼까요? <br />
          2023 경남고성공룡세계엑스포부터 고성 곳곳의 정보도 얻어보세요
        </StyledContent>
        <StyledGoExpoButton>
          <Link to="/expo" style={{ textDecoration: 'none', color: '#F3F8F8' }}>
            실전편으로 이동하기
          </Link>
        </StyledGoExpoButton>
      </StyledGoExpo>
    </StyledSplitPage>
  );
};

export default SplitPage;
