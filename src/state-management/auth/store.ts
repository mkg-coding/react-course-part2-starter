import { create } from "zustand";

interface AuthStore {
  username: string;
  login: (name: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  login: (name) => set(() => ({ username: name })),
  logout: () => set(() => ({ username: "" })),
}));

export default useAuthStore;
