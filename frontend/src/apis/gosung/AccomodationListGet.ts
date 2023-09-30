import { async } from 'q';
import api from '../api';
import { Category } from '@mui/icons-material';

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
