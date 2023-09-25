import api from '../api';

const lodgmentListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: `/hotel`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default lodgmentListGet;
