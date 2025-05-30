import { NextResponse } from 'next/server';

import { getUser } from '@/services/api/user';

export async function GET() {
  const user = await getUser();
  if (!user) return NextResponse.json({ user: null }, { status: 401 });

  return NextResponse.json({ user });
}
