'use client';

import { useParams } from 'next/navigation';

import { useVoteStore } from '@/lib/store/use-vote-store';

export default function CandidateCard({ name }: { name: string }) {
  const params = useParams();
  const cast = params['cast']; // front, back, demo

  const { selectedFrontend, selectedBackend, selectedTeam, selectFrontend, selectBackend, selectTeam } = useVoteStore();

  // 현재 선택된 후보 이름과 비교해 선택 여부 판단
  const isSelected =
    (cast === 'front' && selectedFrontend === name) ||
    (cast === 'back' && selectedBackend === name) ||
    (cast === 'team' && selectedTeam === name);

  const handleClick = () => {
    if (cast === 'front') selectFrontend(name);
    else if (cast === 'back') selectBackend(name);
    else if (cast === 'team') selectTeam(name);
  };

  return (
    <button
      onClick={handleClick}
      className={
        'bg-grayscale-04 text-body-01 hover:bg-neutral-01-tp relative flex h-13.5 cursor-pointer items-center justify-center border-2 border-black transition-colors'
      }
    >
      {name}
      {isSelected && (
        <>
          {/* 반투명 레이어 */}
          <div className="bg-neutral-01-tp absolute inset-0 z-10 rounded-sm" />

          {/* 체크 아이콘 */}
          <button className={`bg-neutral-01 top-50% right-50% absolute z-20 h-8.5 w-8.5 rounded-full border-2`}>
            <span className="text-xl font-bold text-gray-700">✓</span>
          </button>
        </>
      )}
    </button>
  );
}
