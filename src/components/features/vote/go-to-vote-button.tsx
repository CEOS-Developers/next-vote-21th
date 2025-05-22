'use client';

import { useRouter } from 'next/navigation';

type ButtonProps = {
  text1: string;
  text2: string;
  href: string;
};

export default function GoToVoteButton({ text1, text2, href }: ButtonProps) {
  const router = useRouter();

  return (
    <div
      className="group border-grayscale-00-black bg-grayscale-04 flex h-24 w-74.5 cursor-pointer items-center justify-between border-2"
      onClick={() => router.push(href)}
    >
      <p className="text-headline-04 text-grayscale-00-black group-hover:text-grayscale-00-black ml-10">
        {text1}
        <br />
        {text2}
      </p>

      <button className="bg-grayscale-03 group-hover:bg-neutral-01 mr-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors">
        {/* 체크표시: 그룹에 hover되면 등장 */}
        <span className="text-xl font-bold text-gray-700 opacity-0 transition-opacity group-hover:opacity-100">✓</span>
      </button>
    </div>
  );
}
