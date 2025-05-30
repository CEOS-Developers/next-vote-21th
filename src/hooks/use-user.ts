'use client';

import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/services/api/user';
import { User } from '@/types/user';

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
    queryFn: getUser,
    staleTime: 1000 * 60, // 1 minute
  });

  return { user, isLoading, isError };
}
