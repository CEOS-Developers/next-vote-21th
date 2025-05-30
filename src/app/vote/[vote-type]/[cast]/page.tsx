'use client';

import { useParams, useRouter } from 'next/navigation';

import Back from '@/components/common/back';
import CandidateGrid from '@/components/features/vote/candidate-grid';
import { MEMBER_DATA, TEAM_LABELS } from '@/lib/constants/member-data';
import { useVoteStore } from '@/lib/store/use-vote-store';

export default function VoteStep2() {
  const params = useParams();
  const router = useRouter();

  // front / back / demo
  const type = params['cast'];

  const getCandidates = () => {
    if (type === 'front') return MEMBER_DATA['FE'];
    if (type === 'back') return MEMBER_DATA['BE'];
    return [...TEAM_LABELS];
  };

  const getTitle = () => {
    if (type === 'front') return 'FE 파트장 투표';
    if (type === 'back') return 'BE 파트장 투표';
    if (type === 'team') return '데모데이 투표';
    return '';
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

    // 투표 애니메이션 페이지로 이동
    router.push(`/vote/${params['vote-type']}/${type}/aggregate`);
  };

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <Back href={`/vote/${params['vote-type']}/list`} />
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{getTitle()}</h1>
      </div>
      {/* content */}
      <div>
        <CandidateGrid list={getCandidates()} />
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="hover:bg-neutral-01 text-caption-01 bg-grayscale-03 mt-4 h-11.5 w-38.5 cursor-pointer rounded-[100px] border-2"
          >
            제출하기
          </button>
        </div>
      </div>
    </>
  );
}
