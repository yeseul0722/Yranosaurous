import api from '../api';

const tourDetailGet = async (tourId: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/tour/${tourId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default tourDetailGet;
