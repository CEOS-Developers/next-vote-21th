"use client";

import React, { useState } from "react";
import Header from "../_components/Header";
import SubmitButton from "@/components/SubmitButton";

const Vote = () => {
  const candidates = [
    "이어드림",
    "인플루이",
    "팝업사이클",
    "프로메사",
    "하니홈",
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setSelected(name);
  };

  return (
    <div className="flex h-full flex-col text-black">
      <Header>데모데이 투표</Header>

      <div className="m-[16px] box-border rounded-full bg-white px-6 py-2 text-center text-[12px] font-semibold text-[#00AF8F] shadow-sm">
        CEOS 21기 데모데이 최고의 1팀을 투표해주세요.
      </div>

      <form className="flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-1 gap-4 p-4">
          {candidates.map((name) => {
            const isActive = selected === name;
            return (
              <button
                type="button"
                key={name}
                onClick={() => handleSelect(name)}
                className={`h-[56px] rounded-[6px] p-4 text-center text-sm font-semibold shadow-sm transition duration-200 ease-in-out ${
                  isActive
                    ? "bg-[#00AF8F] text-white shadow-md"
                    : "bg-white text-black hover:bg-[#00AF8F] hover:text-white hover:shadow-md"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        <SubmitButton isActive={selected !== null}>투표하기</SubmitButton>
      </form>
    </div>
  );
};

export default Vote;
