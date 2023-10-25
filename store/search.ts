import { create } from "zustand";

interface ISearchStore {
  search: any;
  setSearch: (value: string) => void;
}

export const useSearch = create<ISearchStore>((set: any) => ({
  search: undefined,
  setSearch: (value) => set({ search: value }),
}));
