import { create } from "zustand";

interface MyState {
  authOn: boolean;
  setAuthOn: (value: boolean) => void;
  spin: boolean;
  setSpin: (value: boolean) => void;
}

const zustandStore = create<MyState>((set) => ({
  authOn: false,
  setAuthOn: (value) => set(() => ({ authOn: value })),
  spin: false,
  setSpin: (value) => set(() => ({ spin: value })),
}));

export default zustandStore;
