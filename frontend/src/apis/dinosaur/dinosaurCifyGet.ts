import api from '../api';

const DinosaurCifyGet = async (dinosaurId: any) => {
  try {
    const response = await api({
      method: 'get',
      url: `/dinosaur/${dinosaurId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurCifyGet;
