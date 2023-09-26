import api from '../api';

const updatePlacePut = async (placeId: string, placeInfo: any) => {
  try {
    const res = await api({
      method: 'put',
      url: `place/${placeId}`,
      data: placeInfo,
    });
    return res;
  } catch (err) {
    // console.error(err);
  }
};
export default updatePlacePut;
