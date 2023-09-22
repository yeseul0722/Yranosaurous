import { create } from 'zustand';
import { LoginType } from './useLoginType';

const useLoginStore = create<LoginType>((set) => ({
  isLogin: false,
  setLogin: (status) => set({ isLogin: status }),
}));

export default useLoginStore;
