'use client';

import ResultGrid from '@components/features/vote/result-grid';
import { BE, FE, TEAMS } from '@constants/memberData';
import { useParams, useRouter } from 'next/navigation';

export default function VoteStep3() {
  const params = useParams();
  const router = useRouter();
  const type = params['cast'];

  const getTitle = () => {
    if (type === 'front') return 'FE 파트장 투표 결과';
    if (type === 'back') return 'BE 파트장 투표 결과';
    if (type === 'team') return '데모데이 투표 결과 ';
    return '';
  };

  const getCandidates = () => {
    if (type === 'front') return FE;
    if (type === 'back') return BE;
    return TEAMS;
  };

  const onSubmit = () => {
    // 첫 화면으로 이동
    router.push(`/vote/${params['vote-type']}/${type}/aggregate`);
  };

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{getTitle()}</h1>
      </div>
      {/* content */}
      <div>
        <ResultGrid list={getCandidates()} />
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="text-caption-01 bg-grayscale-03 mt-4 h-11.5 w-38.5 cursor-pointer rounded-[100px] border-2"
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
}
