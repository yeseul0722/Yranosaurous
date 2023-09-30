import { useEffect, useState } from 'react';
import TodayFestivalListGet from '../../apis/festival/todayFestivalListGet';
import { async } from 'q';

export const useTodayFestivalListHook = () => {
  const [todayFestivalList, setTodayFestivalList] = useState();

  const getTodayFestivalList = async (today: any) => {
    const res = await TodayFestivalListGet(today);
    setTodayFestivalList(res.data.response);
  };

  return { todayFestivalList, getTodayFestivalList };
};
