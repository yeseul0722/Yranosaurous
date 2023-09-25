import { useEffect, useState } from 'react';
import FestivalListGet from '../../apis/festival/festivalListGet';
import { async } from 'q';

export const useFestivalListHook = () => {
  const [festivalList, setFestivalList] = useState();

  const getFestivalList = async (today: any) => {
    const res = await FestivalListGet(today);
    setFestivalList(res.data.response);
  };

  return { festivalList, getFestivalList };
};
