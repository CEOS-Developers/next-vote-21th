import clsx from "clsx";

export default function ResultItem({ type }: { type: "leader" | "demoday" }) {
  const isLeaderVote = type === "leader";

  const rankColor = (rank: number) => {
    if (rank === 1) return "text-primary-700";
    if (rank === 2) return "text-primary-400";
    if (rank === 3) return "text-primary-300";
    if (rank === 4) return "text-primary-200";
  };
  const rankContent = (rank: number) => {
    if (rank === 1) return "1st";
    if (rank === 2) return "2nd";
    if (rank === 3) return "3rd";
    if (rank === 4) return "4th";
  };
  const voteContent = (vote: number) => {
    if (vote > 1) return `${vote} vote`;
    return `${vote} votes`;
  };

  return (
    <li
      className="list-none grid grid-cols-[auto_1fr_auto] gap-12 items-center
        en-text text-[28px] font-normal"
    >
      <span className={clsx("w-12 font-medium", rankColor(1))}>
        {rankContent(1)}
      </span>
      <span className="en-text text-center">
        {isLeaderVote ? "Promesa 권동욱, Influy 최서연" : "ProjectTitle"}
      </span>
      <span className="w-38 text-right">{voteContent(3)}</span>
    </li>
  );
}
