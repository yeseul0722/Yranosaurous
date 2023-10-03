import api from '../api';

const DinosaurAnimalpost = async (country: any, higherClass: any) => {
  console.log(country, higherClass);
  try {
    const response = await api({
      method: 'post',
      url: `/elasticsearch/animals`,
      data: {
        country: country,
        higherClass: higherClass,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export default DinosaurAnimalpost;
