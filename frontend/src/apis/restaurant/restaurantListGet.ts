import api from '../api';

const restaurantListGet = async (category: any) => {
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

export default restaurantListGet;
