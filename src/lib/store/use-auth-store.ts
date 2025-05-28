import { create } from 'zustand';

interface User {
  id: string;
}

interface AuthState {
  user: User | null;
  accessToken: string;
  isLoggedIn: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;

  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: '',
  isLoggedIn: false,

  login: (user, token) =>
    set(() => ({
      user,
      accessToken: token,
      isLoggedIn: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      accessToken: '',
      isLoggedIn: false,
    })),

  setAccessToken: (token) =>
    set((prev) => ({
      ...prev,
      accessToken: token,
      isLoggedIn: token !== '',
    })),
}));
