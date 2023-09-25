import api from '../api';

const lodgmentDetailGet = async (id: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/hotel/detail/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default lodgmentDetailGet;
