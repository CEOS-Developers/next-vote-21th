'use client';

import { useEffect, useState } from 'react';
import Arrow from '@public/icons/arrow.svg';
import Box from '@public/icons/box.svg';
import Paper from '@public/icons/paper.svg';
import { useRouter } from 'next/navigation';

export default function VoteStep3() {
  const router = useRouter();

  const [showArrow, setShowArrow] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const arrowTimer = setTimeout(() => {
      setShowArrow(false);
      setStartFadeOut(true);
    }, 500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => {
      clearTimeout(arrowTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleResult = () => {
    router.push('/vote/part/result');
  };

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">FE 파트장 투표</h1>
      </div>

      {/* animation zone */}
      <div className="mb-15 grid h-full items-center justify-items-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Paper */}
          <div className="mb-1 h-12">
            <Paper
              className={`transition-all duration-1000 ease-in-out ${
                startFadeOut ? 'translate-y-25 opacity-0' : 'opacity-100'
              }`}
            />
          </div>

          {/* Arrow */}
          <div className="mb-1 h-12.5">
            {showArrow && <Arrow className="opacity-100 transition-opacity duration-800 ease-in-out" />}
          </div>

          {/* Box */}
          <Box />
        </div>

        {/* 결과 보기 버튼 */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleResult}
            className={`text-caption-01 ${showButton ? 'bg-neutral-01 cursor-pointer' : 'bg-grayscale-03'} h-11.5 w-38.5 rounded-[100px] border-2 transition-all duration-500`}
          >
            결과 보기
          </button>
        </div>
      </div>
    </>
  );
}
