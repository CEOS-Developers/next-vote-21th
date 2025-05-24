"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import VoteList from "./VoteList";
import ResultList from "./ResultList";

export default function VoteResultTab({
  type,
}: {
  type: "leader" | "demoday";
}) {
  const [activeTab, setActiveTab] = useState("Vote");
  const tabs = [
    { title: "Vote", icon: "/vote.svg" },
    { title: "Result", icon: "/chart.svg" },
  ];

  return (
    <div className="flex flex-col gap-12 items-center en-text">
      <div className="flex">
        {/* 탭 버튼 */}
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.title)}
            className={clsx(
              "border-b-2 text-[28px] flex gap-3 px-6 py-4",
              activeTab === tab.title
                ? "border-monochrome-black text-monochrome-black"
                : "border-monochrome-400 text-monochrome-400"
            )}
          >
            <Image
              className={activeTab === tab.title ? "brightness-0" : ""}
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
      {activeTab === "Vote" ? (
        <VoteList type={type} />
      ) : (
        <ResultList type={type} />
      )}
    </div>
  );
}
