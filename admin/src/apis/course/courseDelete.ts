import api from '../api';

const courseDelete = async (courseId: string) => {
  try {
    const res = await api({
      method: 'delete',
      url: `course/${courseId}`,
    });
    return res;
  } catch (err) {
    // console.error(err);
  }
};
export default courseDelete;
