import api from '../api';

const TourismListGet = async (category: string) => {
  try {
    const response = await api({
      method: 'get',
      url: `/tours/${category}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default TourismListGet;
