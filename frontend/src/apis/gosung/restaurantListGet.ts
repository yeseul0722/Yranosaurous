import api from '../api';

const RestaurantListGEt = async (category: number) => {
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

export default RestaurantListGEt;
