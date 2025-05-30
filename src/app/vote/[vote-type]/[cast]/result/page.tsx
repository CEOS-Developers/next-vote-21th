'use client';

import { useParams, useRouter } from 'next/navigation';

import ResultGrid from '@/components/features/vote/result-grid';
import { MEMBER_DATA, TEAM_LABELS } from '@/lib/constants/member-data';

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
    if (type === 'front') return MEMBER_DATA['FE'];
    if (type === 'back') return MEMBER_DATA['BE'];
    return TEAM_LABELS;
  };

  // 임시 득표수 설정 함수 (추후 backend API로 변경경)
  const getCandidatesWithVotes = () => {
    return getCandidates().map((name, index) => ({
      name,
      votes: 10 - index, // 임시 득표수: 앞사람이 더 많이 받음
    }));
  };

  const onSubmit = () => {
    // 첫 화면으로 이동
    router.push(`/`);
  };

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{getTitle()}</h1>
      </div>
      {/* content */}
      <div>
        <ResultGrid list={getCandidatesWithVotes()} />
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="hover:bg-neutral-01 text-caption-01 bg-grayscale-03 mt-4 h-11.5 w-38.5 cursor-pointer rounded-[100px] border-2"
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
}
