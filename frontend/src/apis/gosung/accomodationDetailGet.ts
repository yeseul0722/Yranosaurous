import api from '../api';

const AccomodationDetailGet = async (id: number) => {
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

export default AccomodationDetailGet;
