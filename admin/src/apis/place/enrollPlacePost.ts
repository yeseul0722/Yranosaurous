import api from '../api';

const enrollPlacePost = async (placeinfo: any) => {
  try {
    const res = await api({
      method: 'post',
      url: 'place',
      data: placeinfo,
    });
    return res;
  } catch (err) {
    //console.log(err)
  }
};

export default enrollPlacePost;
