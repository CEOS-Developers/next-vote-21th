import { useAuthStore } from '@/lib/store/use-auth-store';
import { LoginInput, SignUpInput } from '@/types/auth.dto';
import { User } from '@/types/user';

import { axiosInstance } from './axios';

interface AuthResponse {
  accessToken: string;
  user: User;
}

export const login = async (input: LoginInput): Promise<void> => {
  const res = await axiosInstance.post<AuthResponse>('__LOGIN_API_URL__', input);
  const { accessToken, user } = res.data;
  useAuthStore.getState().setAuth(user, accessToken);
};

export const signup = async (input: SignUpInput): Promise<void> => {
  await axiosInstance.post('__SIGNUP_API_URL__', input);
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post('__LOGOUT_API_URL__');
  useAuthStore.getState().clearAuth();
};
