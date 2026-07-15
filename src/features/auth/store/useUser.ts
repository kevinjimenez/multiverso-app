import { create } from 'zustand';

export interface User {
  username: string;
  guest: boolean;
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
  email: () => string;
  avatar: () => string;
}

const InitUser: User = {
  username: 'Guest',
  guest: true,
};

export const useUserStore = create<UserStore>()((set, get) => ({
  user: InitUser,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: InitUser }),
  email: () => {
    const { user } = get();
    return `${user.username.trim().toLowerCase()}@google.com`;
  },
  avatar: () => {
    const { user } = get();
    return user.username.charAt(0);
  },
}));
