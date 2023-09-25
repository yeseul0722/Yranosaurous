import api from '../api';

const placesGet = async () => {
  try {
    const response = await api.get('/places');
    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    // console.error('Error: ', error);
    throw error;
  }
};

export default placesGet;
