"use client";

import Link from "next/link";
import { PATH } from "@/constants/path";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";

import SubmitButton from "@/components/SubmitButton";
import Lottie from "@/components/Lottie";
import VoteButton from "@/components/VoteButton";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const logout = useLogout();

  return (
    <div className="flex h-full flex-col justify-between">
      <Link href={PATH.HOME}>
        <header className="font-headline-1 border-b-gray100 p-4">
          🗳️ 투표드림
        </header>
      </Link>

      <div className="w-full max-w-3xl self-center">
        <Lottie />
      </div>

      <div
        className={`font-headline-3 text-main self-center rounded-full bg-white px-6 py-2 ${isLoggedIn ? "text-main" : "text-pink"}`}
      >
        {isLoggedIn ? "투표를 진행해주세요." : "로그인이 필요합니다."}
      </div>

      <div className="md:self-center">
        <div className="flex flex-col md:flex-row">
          <VoteButton
            href={isLoggedIn ? PATH.VOTE : PATH.LOGIN}
            label="파트장 투표하기"
          />
          <VoteButton
            href={isLoggedIn ? PATH.DEMOVOTE : PATH.LOGIN}
            label="데모데이 투표하기"
          />
        </div>

        {isLoggedIn ? (
          <div onClick={logout}>
            <SubmitButton isActive={true}>로그아웃 하기</SubmitButton>
          </div>
        ) : (
          <Link href={PATH.LOGIN}>
            <SubmitButton isActive={true}>로그인 하기</SubmitButton>
          </Link>
        )}
      </div>
    </div>
  );
}
