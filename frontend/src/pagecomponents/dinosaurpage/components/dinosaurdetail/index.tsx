import React from 'react';
import {
  StyledDsDetailPage,
  StyledDsDetailWindow,
  StyledDsDetailImg,
  StyledDsDetailBody,
  StyledDetailTitle,
  StyledDetailTitleText,
  StyledDeTailContent,
  StyledDsDetailCloseButton,
  StyledDeTailContentText,
} from './DsDetail.styled';
import { useLocation } from 'react-router-dom';

const DsDetail = (props: any) => {
  return (
    <StyledDsDetailPage>
      <StyledDsDetailWindow>
        <StyledDsDetailImg src={props.DsImg} />
        <StyledDsDetailBody>
          <StyledDetailTitle>
            <StyledDetailTitleText>{props.DsName}</StyledDetailTitleText>
          </StyledDetailTitle>
          <StyledDeTailContent>
            <StyledDeTailContentText>
              트리케라톱스는 후기 백악기 (6800만 년 전 ~ 6500만 년 전)에 살았으며 북아메리카에서 발견된 각룡류인
              초식공룡입니다. 트리케라톱스는 머리에 세 개의 뿔과 넓은 프릴을 가진 특징을 가졌습니다. 각룡류 중에서
              몸집이 큰 편에 속하여 육상 공룡중 머리가 가장 큰 것에 속하고 있습니다. 속 : 트리케라톱스 길이 : 7.6~9m
              <br />
              무게 : 6~7
              <br />
              생존시기 : 후기 백악기 (6800만 년 전 ~ 6500만 년 전)
              <br />
              발견장소 : 미국
            </StyledDeTailContentText>
          </StyledDeTailContent>
        </StyledDsDetailBody>
        <StyledDsDetailCloseButton onClick={props.closeDetail}>닫기</StyledDsDetailCloseButton>
      </StyledDsDetailWindow>
    </StyledDsDetailPage>
  );
};

export default DsDetail;
