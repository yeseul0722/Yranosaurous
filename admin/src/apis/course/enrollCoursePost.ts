import api from '../api';

const enrollCoursePost = async (courseinfo: any) => {
  try {
    const res = await api({
      method: 'post',
      url: 'course',
      data: courseinfo,
    });
    return res;
  } catch (err) {
    // console.log(err);
  }
};

export default enrollCoursePost;
