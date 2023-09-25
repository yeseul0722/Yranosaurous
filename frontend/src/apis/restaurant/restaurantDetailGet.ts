import api from '../api';

const restaurantDetailGet = async (id: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/restaurant/detail/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default restaurantDetailGet;
