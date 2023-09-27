import api from '../api';

const enrollShowPost = async (showinfo: any) => {
  try {
    const res = await api({
      method: 'post',
      url: 'festival',
      data: showinfo,
    });
    return res;
  } catch (err) {
    //console.log(err)
  }
};

export default enrollShowPost;
