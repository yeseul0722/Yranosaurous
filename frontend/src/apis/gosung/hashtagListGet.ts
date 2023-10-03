import api from '../api';

const HashtagListGet = async (tag: string) => {
  try {
    const response = await api({
      method: 'get',
      url: `/restaurant/hashtag/${tag}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default HashtagListGet;
