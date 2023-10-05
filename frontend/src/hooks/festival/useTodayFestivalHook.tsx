import { useEffect, useState } from 'react';
import TodayFestivalListGet from '../../apis/festival/todayFestivalListGet';
import useGuideStore from '../../stores/guide/useGuideStore';

export const useTodayFestivalHook = () => {
  const [todayFestivalList, setTodayFestivalList] = useState<any[]>([]);

  const setFestival = useGuideStore((state: any) => state.setFestival);
  const setFestivalID = useGuideStore((state: any) => state.setFestivalID);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  useEffect(() => {
    if (todayFestivalList.length > 0) {
      setClosestFestival();
    }
  }, [todayFestivalList]);
  const getTodayFestivalList = async () => {
    const res = await TodayFestivalListGet(formattedDate);

    const sortedData = res.data.response.sort((a: any, b: any) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });
    setTodayFestivalList(sortedData);
  };

  const handleFestival = (festival: any) => {
    // console.log(festival);
    setFestival(festival.placeResponse);
    setFestivalID(festival.id);
  };

  const setClosestFestival = () => {
    if (todayFestivalList.length === 0) return;

    let closestTimeDiff = Infinity;
    let closestFestival;

    todayFestivalList.forEach((festival) => {
      const festivalTime = new Date(festival.startTime);
      const timeDiff = festivalTime.getTime() - today.getTime();

      if (timeDiff > 0 && timeDiff < closestTimeDiff) {
        closestTimeDiff = timeDiff;
        closestFestival = festival;
        // console.log('cF', closestFestival);
      }
    });

    if (closestFestival) {
      handleFestival(closestFestival);
    }
  };
  return { todayFestivalList, getTodayFestivalList, handleFestival, setClosestFestival };
};
