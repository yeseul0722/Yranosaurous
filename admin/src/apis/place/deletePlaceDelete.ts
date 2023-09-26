import api from '../api';

const deletePlaceDelete = async (placeId: string) => {
  try {
    const res = await api({
      method: 'delete',
      url: `place/${placeId}`,
    });
    return res;
  } catch (err) {
    // console.error(err);
  }
};
export default deletePlaceDelete;
