import clsx from "clsx";
import VoteItem from "./VoteItem";

export default function VoteList({ type }: { type: "leader" | "demoday" }) {
  const isLeaderVote = type === "leader";
  return (
    <div className={clsx(isLeaderVote ? "w-95" : "w-160")}>
      <header
        className="grid grid-cols-[auto_auto_1fr] gap-12 items-center pt-3 pb-5 mb-8
          border-b-2 border-monochrome-300 text-monochrome-500 en-text text-[20px] font-normal"
      >
        <div className="w-7" />
        <div className="w-40">{isLeaderVote ? "Team" : "Title"}</div>
        <div className={isLeaderVote ? "text-right" : "text-center"}>
          {isLeaderVote ? "Name" : "Description"}
        </div>
      </header>
      <ul className="flex flex-col gap-12">
        <VoteItem type={type} />
        <VoteItem type={type} />
        <VoteItem type={type} />
        <VoteItem type={type} />
      </ul>
    </div>
  );
}
