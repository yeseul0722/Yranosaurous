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
import { useDinosaurSubHook } from '../../../../hooks/dinosaur/useDinosaurSubHook';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';

const DsDetail = (props: any) => {
  const [dsContetnt, setDsContent] = useState('');
  const dinosaurId = props.DsId;
  const { dinosaurDetail, getDinosaurDetail } = useDinosaurDetailHook();

  const { dinosaurSubList, getDinosaurSubList } = useDinosaurSubHook(); // 공룡 서브
  const DsEngName = useDinosaurStore((state: any) => state.DsEngName);
  useEffect(() => {
    if (DsEngName) {
      getDinosaurSubList(DsEngName);
    }
  }, [DsEngName]);

  useEffect(() => {
    getDinosaurDetail(dinosaurId);
  }, []);

  const DsKorName = dinosaurDetail.korName;
  const DsDetailimg = dinosaurDetail.imgAddress;
  const DsContent = dinosaurDetail.content;
  const DsContent2 = DsContent ? DsContent.replaceAll('.', '. <br>') : '';
  // const DsEngName = dinosaurDetail.engName;
  const DsCategory = dinosaurDetail.category;
  const DsDiscoverySite = dinosaurDetail.discoverySite;
  const DsEra = dinosaurDetail.era;
  const DsLength = dinosaurDetail.length;
  const DsWeight = dinosaurDetail.weight;
  const DsTaste = dinosaurDetail.taste;
  // console.log(DsContent);

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
                <StyledDetailContentText>{DsCategory}</StyledDetailContentText>
              </StyledDsDetailBox>
              <StyledDsDetailBox>
                <StyledDetailContentTitle>| 크기</StyledDetailContentTitle>
                <StyledDetailContentText>
                  {DsLength} / {DsWeight}
                </StyledDetailContentText>
              </StyledDsDetailBox>
              <StyledDsDetailBox>
                <StyledDetailContentTitle>| 생존시기</StyledDetailContentTitle>
                <StyledDetailContentText>{DsEra}</StyledDetailContentText>
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
            </StyledDeTailSummaryText>
          </StyledDeTailSummary>
          <StyledDsDetailCloseButton onClick={props.closeDetail}>X</StyledDsDetailCloseButton>
        </StyldDsDetailWindowBorder>
      </StyledDsDetailWindow>
    </StyledDsDetailPage>
  );
};

export default DsDetail;
