import api from '../api';

const DinosaurAnimalpost = async () => {
  try {
    const response = await api({
      method: 'post',
      url: `/api/elasticsearch/animals`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurAnimalpost;
