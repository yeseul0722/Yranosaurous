import React, { useEffect, useState } from 'react';
import {
  StyledDsDetailPage,
  StyledDsDetailWindow,
  StyledDsDetailCloseButton,
  StyledDsDetailInfoContainer,
  StyledDsDetailImg,
  StyledDsDetailBox,
  StyledDsDetailBody,
  StyledDetailTitle,
  StyledDetailTitleText,
  StyledDetailEnTitleText,
  StyledDetailContentTitle,
  StyledDetailContentText,
  StyledDeTailSummary,
  StyledDeTailSummaryText,
  StyldDsDetailWindowBorder,
} from './DsDetail.styled';
import { useDinosaurDetailHook } from '../../../../hooks/dinosaur/useDinosaurDetailHook';

const DsDetail = (props: any) => {
  const [dsContetnt, setDsContent] = useState('');
  const dinosaurId = props.DsId;
  const { dinosaurDetail, getDinosaurDetail } = useDinosaurDetailHook();

  useEffect(() => {
    getDinosaurDetail(dinosaurId);
  }, []);

  // console.log(dinosaurDetail);
  const DsKorName = dinosaurDetail.korName;
  const DsDetailimg = dinosaurDetail.imgAddress;
  const DsContent = dinosaurDetail.content;
  const DsContent2 = DsContent ? DsContent.replaceAll('.', '. <br>') : '';
  const DsEngName = dinosaurDetail.engName;
  console.log(DsContent);

  return (
    <StyledDsDetailPage>
      <StyledDsDetailWindow>
        <StyldDsDetailWindowBorder>
          {/* 좌편 */}
          <StyledDsDetailBody>
            <StyledDsDetailInfoContainer>
              {/* 공룡 이미지 */}
              <StyledDetailTitle>
                <StyledDetailTitleText>| {DsKorName}</StyledDetailTitleText>
                <StyledDetailEnTitleText>| {DsEngName}</StyledDetailEnTitleText>
              </StyledDetailTitle>
              <StyledDsDetailImg src={DsDetailimg} alt={DsEngName} />

              {/* 공룡 정보 */}
              <StyledDsDetailBox>
                <StyledDetailContentTitle>| 분류</StyledDetailContentTitle>
                <StyledDetailContentText>레소토사우루스/조반류</StyledDetailContentText>
              </StyledDsDetailBox>
              <StyledDsDetailBox>
                <StyledDetailContentTitle>| 크기</StyledDetailContentTitle>
                <StyledDetailContentText>1m / 3.6~7kg</StyledDetailContentText>
              </StyledDsDetailBox>
              <StyledDsDetailBox>
                <StyledDetailContentTitle>| 생존시기</StyledDetailContentTitle>
                <StyledDetailContentText>전기 쥐라기 (2 억 100 만 년 전 ~ 1 억 7400 만 년 전 )</StyledDetailContentText>
              </StyledDsDetailBox>
            </StyledDsDetailInfoContainer>
          </StyledDsDetailBody>

          {/* 우편 */}
          <StyledDeTailSummary>
            {/* <StyledDetailTitle> */}
            <StyledDetailTitleText>| {DsKorName}의 이야기</StyledDetailTitleText>
            {/* </StyledDetailTitle> */}
            <StyledDeTailSummaryText>
              {/* {DsContent2} */}
              <span dangerouslySetInnerHTML={{ __html: DsContent2 }} />
              {/* 트리케라톱스는 후기 백악기 (6800만 년 전 ~ 6500만 년 전)에 살았으며 북아메리카에서 발견된 각룡류인
              초식공룡입니다. 트리케라톱스는 머리에 세 개의 뿔과 넓은 프릴을 가진 특징을 가졌습니다. 각룡류 중에서
              몸집이 큰 편에 속하여 육상 공룡중 머리가 가장 큰 것에 속하고 있습니다.
              <br />
              <br />
              트리케라톱스는 후기 백악기 (6800만 년 전 ~ 6500만 년 전)에 살았으며 북아메리카에서 발견된 각룡류인
              초식공룡입니다. 트리케라톱스는 머리에 세 개의 뿔과 넓은 프릴을 가진 특징을 가졌습니다. 각룡류 중에서
              몸집이 큰 편에 속하여 육상 공룡중 머리가 가장 큰 것에 속하고 있습니다.
              <br />
              <br />
              트리케라톱스는 후기 백악기 (6800만 년 전 ~ 6500만 년 전)에 살았으며 북아메리카에서 발견된 각룡류인
              초식공룡입니다. 트리케라톱스는 머리에 세 개의 뿔과 넓은 프릴을 가진 특징을 가졌습니다. 각룡류 중에서
              몸집이 큰 편에 속하여 육상 공룡중 머리가 가장 큰 것에 속하고 있습니다. */}
            </StyledDeTailSummaryText>
          </StyledDeTailSummary>
          <StyledDsDetailCloseButton onClick={props.closeDetail}>X</StyledDsDetailCloseButton>
        </StyldDsDetailWindowBorder>
      </StyledDsDetailWindow>
    </StyledDsDetailPage>
  );
};

export default DsDetail;
