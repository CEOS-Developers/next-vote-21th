'use client';

import Back from '@components/common/back';
import CandidateGrid from '@components/features/vote/candidate-grid';
import { BE, FE, TEAMS } from '@constants/memberData';
import { useParams } from 'next/navigation';

export default function VoteStep2() {
  const params = useParams();

  // front / back / demo
  const type = params['cast'];

  const getCandidates = () => {
    if (type === 'front') return FE;
    if (type === 'back') return BE;
    return TEAMS;
  };

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <Back />
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{type}</h1>
      </div>
      {/* content */}
      <div>
        <CandidateGrid list={getCandidates()} />
        <div className="flex justify-center">
          <button className="text-caption-01 bg-grayscale-03 mt-4 h-11.5 w-38.5 cursor-pointer rounded-[100px] border-2">
            제출하기
          </button>
        </div>
      </div>
    </>
  );
}
