'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { VOTE_TAB_OPTIONS } from '@/constants/vote';

import VoteList from './VoteList';
import ResultList from './ResultList';

type VoteResultTabProps = {
  type: 'leader' | 'demoday';
};

export default function VoteResultTab({ type }: VoteResultTabProps) {
  const [activeTab, setActiveTab] = useState('Vote');

  return (
    <div className="flex flex-col gap-12 items-center en-text">
      <div className="flex">
        {/* 탭 버튼 */}
        {VOTE_TAB_OPTIONS.map((tab) => (
          <button
          key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={clsx(
              'border-b-2 text-[28px] flex gap-3 px-6 py-4',
              activeTab === tab.title
                ? 'border-monochrome-black text-monochrome-black'
                : 'border-monochrome-400 text-monochrome-400'
            )}
          >
            <Image
              className={activeTab === tab.title ? 'brightness-0' : ''}
              src={tab.icon}
              alt={tab.title}
              width={24}
              height={24}
            />
            {tab.title}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      {activeTab === 'Vote' ? (
        type === 'leader' ? (
          <div className="flex gap-30">
            <VoteList type={type} />
            <VoteList type={type} />
          </div>
        ) : (
          <VoteList type={type} />
        )
      ) : (
        <ResultList type={type} />
      )}
    </div>
  );
}
