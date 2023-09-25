import api from '../api';

const FestivalListGet = async (date: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/festival/${date}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default FestivalListGet;
