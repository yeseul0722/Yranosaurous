import api from '../api';

const DinosaurAnimalpost = async (country: any, higherClass: any) => {
  try {
    const response = await api({
      method: 'post',
      url: `/elasticsearch/animals`,
      data: {
        country: country,
        higherClass: higherClass,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurAnimalpost;
