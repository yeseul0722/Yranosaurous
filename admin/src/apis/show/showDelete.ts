import api from '../api';

const showDelete = async (festivalId: string) => {
  try {
    const res = await api({
      method: 'delete',
      url: `festival/${festivalId}`,
    });
    return res;
  } catch (err) {
    // console.error(err);
  }
};
export default showDelete;
