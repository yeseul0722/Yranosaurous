import api from '../api';

const RestaurantDetailGet = async (id: number) => {
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

export default RestaurantDetailGet;
