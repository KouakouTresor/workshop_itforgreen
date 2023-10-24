import { create } from "zustand";

interface ISearchStore {
  search: any;
  setSearch: (value: string) => void;
}

export const useUser = create<ISearchStore>((set: any) => ({
  search: undefined,
  setSearch: (value: string) => set(() => value),
}));
