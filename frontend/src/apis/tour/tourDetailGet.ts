import api from '../api';

const tourDetailGet = async (tourId: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/tours/${tourId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default tourDetailGet;
