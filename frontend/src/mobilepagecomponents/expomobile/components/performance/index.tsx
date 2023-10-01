import React, { useEffect } from 'react';
import {
  StyledPerformanceContainer,
  StyledNavContainer,
  StyledNav,
  StyledPerformanceContentContainer,
  StyeldPerformanceContent,
  StyledPerformanceInfo,
  StyledText,
  StyledTitle,
  StyledContent,
  StyledMapContainer,
  StyledTable,
  StyledTableHead,
  CustomTableRow,
  StyledContentContainer,
} from './Performacne.styled';

import { useTodayFestivalHook } from '../../../../hooks/festival/useTodayFestivalHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';
import Map from '../../../../pagecomponents/expopage/components/kakaomap';
const Performance = () => {
  const { todayFestivalList, getTodayFestivalList, handleFestival } = useTodayFestivalHook();
  const festival = useGuideStore((state: any) => state.festival);
  const festivalID = useGuideStore((state: any) => state.festivalID);
  useEffect(() => {
    getTodayFestivalList();
  }, []);

  useEffect(() => {
    console.log(festival);
  }, [festival]);

  return (
    <StyledPerformanceContainer>
      <StyledNavContainer>
        <StyledNav>엑스포 공연 안내</StyledNav>
      </StyledNavContainer>
      <StyledPerformanceContentContainer>
        <StyeldPerformanceContent>
          <StyledPerformanceInfo>
            <StyledText>오늘의 공연</StyledText>
            <StyledTable>
              <StyledTableHead>
                <CustomTableRow>
                  <StyledTitle>시간</StyledTitle>
                  <StyledTitle>공연명</StyledTitle>
                  <StyledTitle>공연장소</StyledTitle>
                </CustomTableRow>
              </StyledTableHead>
              <StyledContentContainer>
                {todayFestivalList?.map((festival: any) => {
                  const dateTime = new Date(festival.startTime);
                  const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  return (
                    <CustomTableRow onClick={() => handleFestival(festival)} key={festival.id}>
                      <StyledContent festivalID={festivalID} id={festival.id}>
                        {timeString}
                      </StyledContent>
                      <StyledContent festivalID={festivalID} id={festival.id}>
                        {festival.name}
                      </StyledContent>
                      <StyledContent festivalID={festivalID} id={festival.id}>
                        {festival.placeName}
                      </StyledContent>
                    </CustomTableRow>
                  );
                })}
              </StyledContentContainer>
            </StyledTable>
          </StyledPerformanceInfo>
        </StyeldPerformanceContent>
        <StyledMapContainer>
          <Map></Map>
        </StyledMapContainer>
      </StyledPerformanceContentContainer>
    </StyledPerformanceContainer>
  );
};

export default Performance;
