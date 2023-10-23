import { create } from "zustand";
import { IUser } from "@/interfaces/user";

interface IUserStore {
  user: any;
  setUser: (settings: any) => void;
}

export const useUser = create<IUserStore>((set: any) => ({
  user: undefined,
  setUser: (newUser: IUser) => set(() => ({ user: newUser })),
}));
