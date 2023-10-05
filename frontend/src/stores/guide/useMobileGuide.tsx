import { create } from 'zustand';

const useMobileGuide = create((set) => ({
  openList: true,
  setOpenList: () => set((state: any) => ({ openList: !state.openList })), // 목록 열고 닫기
  resetOpenList: () => set(() => ({ openList: false })), // 처음 랜더링 될 때 무조건 false
}));

export default useMobileGuide;
