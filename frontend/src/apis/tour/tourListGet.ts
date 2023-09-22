import api from '../api';

const TourListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/tours',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default TourListGet;
