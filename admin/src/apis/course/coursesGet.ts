import api from '../api';

const coursesGet = async () => {
  try {
    const response = await api.get('/courses');
    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    // console.error('Error: ', error);
    throw error;
  }
};

export default coursesGet;
