import VoteItem from "@/components/features/vote/VoteItem";

export default async function Page({
  params,
}: {
  params: Promise<{ type: "leader" | "demoday" }>;
}) {
  const { type } = await params;
  return (
    <>
      <VoteItem type={type} />
      <VoteItem type={"demoday"} />
    </>
  );
}
