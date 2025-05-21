'use client';

import { useVoteStore } from '@stores/vote-store';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  text: string;
  href: string;
  type: '파트장 투표' | '데모데이 투표';
};

export default function SelectVoteButton({ text, href, type }: ButtonProps) {
  const voteType = useVoteStore((state) => state.voteType);
  const setVoteType = useVoteStore((state) => state.setVoteType);
  const router = useRouter();

  const isSelected = voteType === type;

  const handleClick = () => {
    if (isSelected) {
      setVoteType(null); // 해제만 하고 이동하지 않음
    } else {
      setVoteType(type); // 타입 저장하고
      router.push(href); // 페이지 이동
    }
  };

  return (
    <div
      className={
        'group border-grayscale-00-black bg-grayscale-04 flex h-24 w-74.5 cursor-pointer items-center justify-between border-2'
      }
      onClick={handleClick}
    >
      <p className="text-headline-04 text-grayscale-00-black group-hover:text-grayscale-00-black ml-10">{text}</p>
      <button
        className={`mr-10 h-10 w-10 rounded-full border-2 transition-colors ${isSelected ? 'bg-neutral-01 border-gray-600' : 'bg-grayscale-03 hover:bg-neutral-01'}`}
      >
        {isSelected && <span className="text-xl font-bold text-gray-700">✓</span>}
      </button>
    </div>
  );
}
