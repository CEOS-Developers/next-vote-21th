'use client';

import { useState } from 'react';

import LogoutModal from '@/components/common/modal';

export default function Indicator() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowLogout(true)}
        className="absolute bottom-5 z-999 flex w-full cursor-pointer justify-center gap-2"
      >
        <div className="bg-grayscale-00-black h-3 w-3 rounded-full" />
        <div className="bg-grayscale-00-black h-3 w-3 rounded-full" />
        <div className="bg-grayscale-00-black h-3 w-3 rounded-full" />
      </div>
      {/* 로그아웃 모달 */}
      {showLogout && <LogoutModal onClose={() => setShowLogout(false)} />}
    </>
  );
}
