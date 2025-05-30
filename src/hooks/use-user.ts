'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getUser } from '@/services/api/user';

export function useUser() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60, // 1 minute
  });

  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || isError)) {
      router.replace('/login');
    }
  }, [user, isLoading, isError, router]);

  return { user, isLoading };
}
