import api from '../api';

const placesListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: `/places`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default placesListGet;
