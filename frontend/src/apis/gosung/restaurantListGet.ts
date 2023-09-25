import api from '../api';

const RestaurantListGet = async (category: number) => {
  try {
    const response = await api({
      method: 'get',
      url: `/restaurant/${category}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default RestaurantListGet;
