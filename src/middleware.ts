import { NextRequest, NextResponse } from 'next/server';

import { User } from '@/types/user';

const PROTECTED_PATHS = ['/vote'];
const PUBLIC_ONLY_PATHS = ['/login', '/sign-up'];

async function getUserFromRequest(req: NextRequest): Promise<User | null> {
  try {
    const res = await fetch('__REFRESH_API_URL', {
      method: 'POST',
      headers: {
        cookie: req.headers.get('cookie') || '',
      },
      credentials: 'include',
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.user;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest): Promise<NextResponse<unknown>> {
  const pathname = req.nextUrl.pathname;
  const user = await getUserFromRequest(req);

  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path)) && !user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (PUBLIC_ONLY_PATHS.includes(pathname) && user) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/vote/:path*', '/login', '/sign-up'],
};
