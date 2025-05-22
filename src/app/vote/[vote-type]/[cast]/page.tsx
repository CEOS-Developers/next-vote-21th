'use client';

import Back from '@components/common/back';
import CandidateGrid from '@components/features/vote/candidate-grid';
import { BE, FE, TEAMS } from '@constants/memberData';
import { useVoteStore } from '@stores/vote-store';
import { useParams, useRouter } from 'next/navigation';

export default function VoteStep2() {
  const params = useParams();
  const router = useRouter();

  // front / back / demo
  const type = params['cast'];

  const getCandidates = () => {
    if (type === 'front') return FE;
    if (type === 'back') return BE;
    return TEAMS;
  };

  const { selectedFrontend, selectedBackend, selectedTeam } = useVoteStore();

  const onSubmit = () => {
    let selected: string | null = null;

    if (type === 'front') selected = selectedFrontend;
    else if (type === 'back') selected = selectedBackend;
    else if (type === 'team') selected = selectedTeam;

    if (!selected) {
      alert('후보를 선택해주세요!');
      return;
    }

    // TODO: 나중에 이곳에서 API 요청
    // await fetch('/api/vote', { method: 'POST', body: JSON.stringify({ voteType, selected }) });

    // 결과 페이지로 이동
    router.push(`/vote/${params['vote-type']}/aggregate`);
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
          <button
            onClick={onSubmit}
            className="text-caption-01 bg-grayscale-03 mt-4 h-11.5 w-38.5 cursor-pointer rounded-[100px] border-2"
          >
            제출하기
          </button>
        </div>
      </div>
    </>
  );
}
