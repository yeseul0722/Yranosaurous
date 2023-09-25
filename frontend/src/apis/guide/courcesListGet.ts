import api from '../api';

const courcesListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: `/courses`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default courcesListGet;
