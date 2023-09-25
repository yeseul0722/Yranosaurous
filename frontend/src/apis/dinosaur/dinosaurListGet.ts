import api from '../api';

const DinosaurListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/dinosaurs',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurListGet;
