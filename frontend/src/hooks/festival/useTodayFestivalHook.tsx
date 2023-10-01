import { useEffect, useState } from 'react';
import TodayFestivalListGet from '../../apis/festival/todayFestivalListGet';
import { async } from 'q';
import useGuideStore from '../../stores/guide/useGuideStore';

export const useTodayFestivalHook = () => {
  const [todayFestivalList, setTodayFestivalList] = useState([]);
  const setFestival = useGuideStore((state: any) => state.setFestival);
  const setFestivalID = useGuideStore((state: any) => state.setFestivalID);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  const getTodayFestivalList = async () => {
    const res = await TodayFestivalListGet(formattedDate);
    setTodayFestivalList(res.data.response);
  };

  const handleFestival = (festival: any) => {
    setFestival(festival.placeResponse);
    setFestivalID(festival.id);
  };

  return { todayFestivalList, getTodayFestivalList, handleFestival };
};
