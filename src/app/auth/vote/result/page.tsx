"use client";

import React from "react";

import Header from "../../_components/Header";

const Result = () => {
  const rankedCandidates = [
    { name: "김서연", affiliation: "프로메사" },
    { name: "김영서", affiliation: "이어드림" },
    { name: "김철홍", affiliation: "팝업사이클" },
    { name: "권동욱", affiliation: "프로메사" },
    { name: "송아영", affiliation: "팝업사이클" },
    { name: "신수진", affiliation: "하니홈" },
  ];

  return (
    <div className="flex h-full flex-col text-black">
      <Header>프론트엔드 파트장 투표</Header>

      <div className="m-[16px] box-border rounded-full bg-white px-6 py-2 text-center text-[12px] font-semibold text-[#00AF8F] shadow-sm">
        CEOS 22기 프론트엔드 파트장 1명을 투표해주세요.
      </div>

      <form className="flex flex-1 flex-col justify-between p-8">
        <div className="flex flex-col gap-3 p-4">
          {rankedCandidates.map((c, index) => {
            const isFirst = index === 0;
            return (
              <div key={c.name} className="flex items-center gap-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${
                    isFirst
                      ? "border-[#00AF8F] bg-white text-[#00AF8F]"
                      : "border-gray-200 bg-gray-100 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex flex-1 items-center justify-between rounded-[10px] bg-white p-4 shadow-sm">
                  <div className="flex flex-col">
                    <div
                      className={`font-semibold ${
                        isFirst ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {c.name}
                    </div>
                    <div
                      className={`text-sm ${
                        isFirst ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      {c.affiliation}
                    </div>
                  </div>

                  {isFirst && <div className="text-xl text-[#00AF8F]">👑</div>}
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Result;
