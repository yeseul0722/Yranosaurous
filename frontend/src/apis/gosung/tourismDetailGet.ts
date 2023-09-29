import api from '../api';

const TourismDetailGet = async (id: number) => {
  try {
    const response = await api({
      method: 'get',
      url: `/tour/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default TourismDetailGet;
