import { cookies } from 'next/headers';

import { User } from '@/types/user';

export const getUser = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const res = await fetch('__REFRESH_API_URL__', {
    method: 'POST',
    headers: { Cookie: (await cookieStore).toString() },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.user;
};
