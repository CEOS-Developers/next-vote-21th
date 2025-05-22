"use client";

import React, { useState } from "react";

import Header from "../_components/Header";
import InputField from "../_components/InputField";
import InputFieldWithFeedback from "../_components/InputFieldWithFeedback";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { PATH } from "@/constants/path";

const Register = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
    email: "",
    team: "",
    role: "",
    name: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isEmailFormatValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidEmail = isEmailFormatValid(user.email);

  return (
    <div className="flex flex-col">
      <Header>회원가입</Header>
      <form>
        <InputField
          label="아이디"
          name="id"
          placeholder="아이디를 입력해주세요"
          value={user.id}
          onChange={handleChange}
        />

        <InputField
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={user.password}
          onChange={handleChange}
        />

        <InputFieldWithFeedback
          label="비밀번호 확인"
          type="password"
          name="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isValid={confirmPassword === user.password}
          message={
            confirmPassword
              ? confirmPassword === user.password
                ? "비밀번호가 일치합니다."
                : "비밀번호가 일치하지 않습니다."
              : ""
          }
        />

        <InputFieldWithFeedback
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          value={user.email}
          onChange={handleChange}
          isValid={isValidEmail}
          message={
            user.email
              ? isValidEmail
                ? " "
                : "이메일 형식이 올바르지 않습니다."
              : " "
          }
        />
      </form>

      <Link href={PATH.LOGIN} className="self-end px-4">
        <span className="text-gray600">이미 계정이 있으신가요? </span>
        <span className="text-main">로그인 하러가기</span>
      </Link>

      <SubmitButton isActive={false}>가입하기</SubmitButton>
    </div>
  );
};

export default Register;
