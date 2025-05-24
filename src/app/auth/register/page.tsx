"use client";

import React, { useEffect, useState } from "react";

import Header from "../_components/Header";
import InputField from "../_components/InputField";
import InputFieldWithFeedback from "../_components/InputFieldWithFeedback";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { PATH } from "@/constants/path";
import { TEAM } from "@/constants/team";

const Register = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
    email: "",
    team: "",
    part: "",
    name: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [teamMember, setTeamMember] = useState<string[]>([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (targetName === "part/name") {
      const [part, name] = targetValue.split("/");
      setUser((prev) => ({ ...prev, part: part, name: name }));
    } else {
      setUser((prev) => ({ ...prev, [targetName]: targetValue }));
    }
  };

  const isEmailFormatValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const isValidEmail = isEmailFormatValid(user.email);

  useEffect(() => {
    //team이 정해지면
    const team = TEAM.find((team_) => team_?.name === user.team);
    if (!user.team || !team) return;

    const teamMem = [
      ...team.front.map((name) => `프론트/${name}`),
      ...team.back.map((name) => `백엔드/${name}`),
    ];

    setTeamMember(teamMem);
  }, [user.team]);

  return (
    <div className="flex h-full flex-col">
      <Header>회원가입</Header>
      <form className="flex flex-1 flex-col justify-between md:min-w-3xl md:self-center">
        <div>
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

          <div className="flex">
            <div className="p-4 md:flex-1/3">
              <div className="font-caption-1 text-gray600">팀</div>
              <select
                name="team"
                value={user.team}
                onChange={handleChange}
                className="font-headline-1 border-b-gray100 w-full py-[7px] outline-0"
              >
                <option value="">팀 선택</option>
                {TEAM.map((team) => (
                  <option key={team?.name} value={team?.name}>
                    {team?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 p-4 md:flex-2/3">
              <div className="font-caption-1 text-gray600">파트/이름</div>
              <select
                name="part/name"
                value={`${user.part}/${user.name}`}
                onChange={handleChange}
                className="font-headline-1 border-b-gray100 w-full py-[7px] outline-0"
              >
                <option>팀원 선택</option>
                {user.team &&
                  teamMember.map((member) => (
                    <option key={member} value={member}>
                      {member}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <Link href={PATH.LOGIN} className="self-end px-4">
            <span className="text-gray600">이미 계정이 있으신가요? </span>
            <span className="text-main">로그인 하러가기</span>
          </Link>

          <SubmitButton isActive={false}>가입하기</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
