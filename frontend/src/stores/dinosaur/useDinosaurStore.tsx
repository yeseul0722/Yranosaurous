import { create } from 'zustand';

const useDinosaurStore = create((set) => ({
  // 공룡 영어 이름
  // 주스턴드1. store에 등록
  DsEngName: '',
  setDsEngName: (data: any) => set((state: any) => ({ DsEngName: data })),

  // 공룡 서브
  dinosaurSub: [],
  useDinosaurStore: (data: any) => set((state: any) => ({ dinosaurSub: data })),

  // 공룡 한글 이름
  DsKorName: '',
  setDsKorName: (data: any) => set((state: any) => ({ DsKorName: data })),

  //공룡 지역 한국어
  DsKorCountry: '',
  setDsKorCountry: (data: any) => set((state: any) => ({ DsKorCountry: data })),
}));

export default useDinosaurStore;
