import courcesListGet from '../../apis/guide/courcesListGet';

export const useFestivalListHook = () => {
  const getFestivalList = async () => {
    const res = await courcesListGet();
    console.log(res.data.response);
  };
  return { getFestivalList };
};
