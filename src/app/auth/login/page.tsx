"use client";

import { useState } from "react";
import Link from "next/link";
import { PATH } from "@/constants/path";

import Header from "../_components/Header";
import InputFieldWithFeedback from "../_components/InputFieldWithFeedback";
import SubmitButton from "@/components/SubmitButton";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const doesUserIdExist = (id: string) => {
    //존재하는지 확인 로직
    console.log(id);
    return true;
  };
  const isPasswordCorrect = (password: string) => {
    //일치하는지 확인 로직
    console.log(password);
    return true;
  };

  const isUserIdValid = doesUserIdExist(id);
  const isPasswordValid = isPasswordCorrect(password);

  return (
    <div className="flex h-full flex-col">
      <Header>로그인</Header>

      <form className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col">
          <InputFieldWithFeedback
            label="아이디"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            isValid={isUserIdValid}
            message={
              isUserIdValid ? "" : "아이디와 일치하는 계정이 존재하지 않습니다."
            }
          />

          <InputFieldWithFeedback
            label="비밀번호"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isValid={isPasswordValid}
            message={isPasswordValid ? " " : "비밀번호가 일치하지 않습니다."}
          />

          <Link href={PATH.REGISTER} className="self-end px-4">
            <span className="text-gray600">계정이 없으신가요? </span>
            <span className="text-main">회원가입 하러가기</span>
          </Link>
        </div>

        <SubmitButton isActive={false}>로그인 하기</SubmitButton>
      </form>
    </div>
  );
};

export default Login;
