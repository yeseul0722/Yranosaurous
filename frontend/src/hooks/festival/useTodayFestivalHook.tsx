import { useState } from 'react';
import TodayFestivalListGet from '../../apis/festival/todayFestivalListGet';
import { async } from 'q';
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
  const getTodayFestivalList = async () => {
    const res = await TodayFestivalListGet(formattedDate);

    const sortedData = res.data.response.sort((a: any, b: any) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });
    setTodayFestivalList(sortedData);
  };

  const handleFestival = (festival: any) => {
    setFestival(festival.placeResponse);
    setFestivalID(festival.id);
  };

  return { todayFestivalList, getTodayFestivalList, handleFestival };
};
