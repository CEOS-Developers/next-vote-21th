'use client';

import ResultCard from './result-card';

type ResultItem = {
  name: string;
  votes: number;
};

export default function ResultGrid({ list }: { list: ResultItem[] }) {
  const columns = list.length <= 5 ? 1 : 2;

  // 최고 득표수 계산
  const maxVotes = Math.max(...list.map((item) => item.votes));

  // 내림차순 정렬
  const sorted = [...list].sort((a, b) => b.votes - a.votes);

  return (
    <div className={`grid grid-rows-5 gap-x-4 gap-y-3 ${columns === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {sorted.map((item) => (
        <ResultCard key={item.name} name={item.name} votes={item.votes} isTop={item.votes === maxVotes} />
      ))}
    </div>
  );
}
