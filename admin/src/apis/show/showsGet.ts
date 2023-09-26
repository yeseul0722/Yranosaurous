import api from '../api';

const showsGet = async () => {
  try {
    const response = await api.get('/festivals');
    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    // console.error('Error: ', error);
    throw error;
  }
};

export default showsGet;
