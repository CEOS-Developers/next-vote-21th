'use client';

import Crown from '@public/icons/crown.svg';

export default function ResultCard({ name, votes, isTop }: { name: string; votes: number; isTop: boolean }) {
  return (
    <div className="bg-grayscale-04 text-body-01 relative flex h-13.5 items-center justify-center border-2 border-black transition-colors">
      {name}
      {/* 최고 특표자인 경우 왕관 표시*/}
      {isTop && <Crown className="absolute top-[-23] left-[-15] h-10.5 w-10" />}

      {/* 반투명 레이어: 최고 득표자가 아닌 경우에만 */}
      {!isTop && <div className="bg-neutral-01-tp absolute inset-0 z-10 rounded-sm" />}

      {/* 득표 수 표시 */}
      <div className="absolute right-[-8] bottom-[-8] z-20 flex h-8.5 w-8.5 items-center justify-center rounded-full border-2 bg-white">
        <span className="text-sm font-bold text-gray-700">{votes}</span>
      </div>
    </div>
  );
}
