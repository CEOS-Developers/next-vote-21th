"use client";

import clsx from "clsx";

export default function VoteItem({ type }: { type: "leader" | "demoday" }) {
  const isLeaderVote = type === "leader";
  return (
    <li className="list-none">
      <label className="grid grid-cols-[auto_auto_1fr] gap-12 items-center cursor-pointer">
        <input
          type="radio"
          name="vote"
          className="appearance-none relative w-7 h-7 border-2 border-monochrome-black rounded-full
            before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2
            before:w-4 before:h-4 before:bg-primary-600 before:rounded-full
            before:hidden checked:before:block"
        />
        <span className="w-40 en-text text-[28px] font-normal truncate">
          {isLeaderVote ? "TeamName" : "ProjectName"}
        </span>
        <span
          className={clsx(
            "text-right truncate",
            isLeaderVote ? "text-[28px]" : "text-[24px]"
          )}
        >
          {isLeaderVote ? "성이름" : "설명설명설명설명 설명설명 설명설명 설명"}
        </span>
      </label>
    </li>
  );
}
