'use client';

import { useQuery } from '@tanstack/react-query';

import { User } from '@/types/user';

async function fetchUser(): Promise<User | null> {
  const res = await fetch('/api/auth/me', { credentials: 'include' });
  if (!res.ok) return null;

  const data = await res.json();
  return data.user;
}

export function useUser(): {
  user: User | null | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 1000 * 60, // 1 minute
  });

  return { user, isLoading, isError };
}
