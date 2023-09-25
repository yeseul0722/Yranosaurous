import courcesListGet from '../../apis/guide/courcesListGet';

export const useCourcesListHook = () => {
  const getCourcesList = async () => {
    const res = await courcesListGet();
    console.log(res.data.response);
  };
  return { getCourcesList };
};
