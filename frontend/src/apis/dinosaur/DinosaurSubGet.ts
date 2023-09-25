import api from '../api';

const DinosaurSubGet = async (DsEngName: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/dinosaurSub/${DsEngName}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurSubGet;
