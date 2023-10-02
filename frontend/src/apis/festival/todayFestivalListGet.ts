import api from '../api';

const TodayFestivalListGet = async (date: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/festival/2023-09-30`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default TodayFestivalListGet;
