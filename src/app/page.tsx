import SubmitButton from "@/components/SubmitButton";
import Lottie from "@/components/Lottie";
import VoteButton from "@/components/VoteButton";
import { PATH } from "@/constants/path";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Link href={PATH.HOME}>
        <header className="font-headline-1 border-b-gray100 p-4">
          🗳️ 투표드림
        </header>
      </Link>

      <div>
        <Lottie />
      </div>

      <div>
        <VoteButton href={PATH.VOTE} label="파트장 투표하기" />
        <VoteButton href={PATH.DEMOVOTE} label="데모데이 투표하기" />

        <Link href={PATH.LOGIN}>
          <SubmitButton isActive={true}>로그인 하기</SubmitButton>
        </Link>
      </div>
    </div>
  );
}
