import ResultItem from "@/components/features/vote/ResultItem";
import ResultList from "@/components/features/vote/ResultList";
import VoteItem from "@/components/features/vote/VoteItem";
import VoteList from "@/components/features/vote/VoteList";
import VoteResultTab from "@/components/features/vote/VoteResultTab";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ type: "leader" | "demoday" }>;
}) {
  const { type } = await params;
  const headerContent = type === "leader" ? "Team Leader" : "Demo Day";
  return (
    <div className="flex flex-col items-center gap-4">
      <header className="text-[40px] en-text flex flex-col items-center">
        CEOS 22ND {headerContent} Vote
        <Image src={"/brush.svg"} alt="브러쉬" width={429} height={9} />
      </header>
      <VoteResultTab type={type} />
    </div>
  );
}
