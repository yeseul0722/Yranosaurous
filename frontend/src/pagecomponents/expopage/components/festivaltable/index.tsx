import { useEffect } from 'react';
import {
  StyledTable,
  StyledTableHead,
  CustomTableRow,
  StyledTitle,
  StyledContentContainer,
  StyledContent,
} from './Festivaltable.styled';
import { useTodayFestivalHook } from '../../../../hooks/festival/useTodayFestivalHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const FestivalTable = () => {
  const { todayFestivalList, getTodayFestivalList, handleFestival, setClosestFestival } = useTodayFestivalHook();
  const festivalID = useGuideStore((state: any) => state.festivalID);

  useEffect(() => {
    getTodayFestivalList();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default FestivalTable;
