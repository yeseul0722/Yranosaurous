import { async } from 'q';
import api from '../api';

const AccomodationListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/hotel',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default AccomodationListGet;
