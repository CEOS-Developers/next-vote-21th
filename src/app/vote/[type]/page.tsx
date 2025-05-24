import VoteItem from "@/components/features/vote/VoteItem";
import VoteList from "@/components/features/vote/VoteList";

export default async function Page({
  params,
}: {
  params: Promise<{ type: "leader" | "demoday" }>;
}) {
  const { type } = await params;
  return (
    <>
      <VoteList type={type} />
    </>
  );
}
