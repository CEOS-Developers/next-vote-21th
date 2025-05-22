'use client';
import ResultCard from './result-card';

export default function ResultGrid({ list }: { list: string[] }) {
  const columns = list.length <= 5 ? 1 : 2;

  return (
    <div className={`grid grid-rows-5 gap-x-4 gap-y-3 ${columns === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {list.map((name) => (
        <ResultCard key={name} name={name} />
      ))}
    </div>
  );
}
