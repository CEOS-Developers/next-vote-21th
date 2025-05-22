'use client';

import { useVoteStore } from '@stores/vote-store';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  text: string;
  href: string;
  type: '파트장 투표' | '데모데이 투표';
};

export default function SelectVoteButton({ text, href, type }: ButtonProps) {
  const setVoteType = useVoteStore((state) => state.setVoteType);
  const router = useRouter();

  const handleClick = () => {
    setVoteType(type); // 타입 저장하고
    router.push(href); // 페이지 이동
  };

  return (
    <div
      className={
        'group border-grayscale-00-black bg-grayscale-04 flex h-24 w-74.5 cursor-pointer items-center justify-between border-2'
      }
      onClick={handleClick}
    >
      <p className="text-headline-04 text-grayscale-00-black group-hover:text-grayscale-00-black ml-10">{text}</p>
      <button className="bg-grayscale-03 hover:bg-neutral-01 mr-10 h-10 w-10 rounded-full border-2 transition-colors">
        <span className="text-xl font-bold text-gray-700 opacity-0 transition-opacity group-hover:opacity-100">✓</span>
      </button>
    </div>
  );
}
