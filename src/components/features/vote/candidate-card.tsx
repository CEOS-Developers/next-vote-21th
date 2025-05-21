'use client';
import { useState } from 'react';

export default function CandidateCard({ name }: { name: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`relative flex h-14 items-center justify-center rounded-sm border border-black text-sm font-semibold ${selected ? 'bg-neutral-200' : 'bg-white'}`}
    >
      {name}
      {selected && <span className="absolute top-1 right-1 text-xs">✓</span>}
    </button>
  );
}
