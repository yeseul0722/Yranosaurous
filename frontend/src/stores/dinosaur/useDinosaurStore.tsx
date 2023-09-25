import { create } from 'zustand';

const useDinosaurStore = create((set) => ({
  // 공룡 이름
  DsEngName: '',
  setDsEngName: (data: any) => set((state: any) => ({ DsEngName: data })),
  // 공룡 서브
  dinosaurSub: [],
  setDinosaurSub: (data: any) => set((state: any) => ({ dinosaurSub: data })),
}));

export default useDinosaurStore;
