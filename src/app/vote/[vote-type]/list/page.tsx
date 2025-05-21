'use client';

import Back from '@components/common/back';
import GoToVoteButton from '@components/features/vote/go-to-vote-button';
import { useParams } from 'next/navigation';

export default function VoteStep1() {
  const params = useParams();

  const type = params['vote-type'];

  console.log(type);

  return (
    <>
      {/* title */}
      <div className="mt-8 mb-15 flex items-center px-8">
        <Back />
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">파트장 투표</h1>
      </div>
      {/* content */}
      {type === 'part' ? (
        <div>
          <GoToVoteButton text1="Front-End" text2="파트장 투표" href="/vote/part/front" />
          <GoToVoteButton text1="Back-End" text2="파트장 투표" href="/vote/part/back" />
        </div>
      ) : (
        <div>
          <GoToVoteButton text1="데모데이 투표" text2="" href="/vote/demo/team" />
        </div>
      )}
    </>
  );
}
