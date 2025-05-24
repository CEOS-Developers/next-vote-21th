import ResultItem from "@/components/features/vote/ResultItem";
import ResultList from "@/components/features/vote/ResultList";
import VoteItem from "@/components/features/vote/VoteItem";
import VoteList from "@/components/features/vote/VoteList";
import VoteResultTab from "@/components/features/vote/VoteResultTab";

export default async function Page({
  params,
}: {
  params: Promise<{ type: "leader" | "demoday" }>;
}) {
  const { type } = await params;
  return (
    <>
      <VoteResultTab type={type} />
    </>
  );
}
