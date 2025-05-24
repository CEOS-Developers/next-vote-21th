import { User } from "@/constants/user";

export const signup = async (user: User) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/vi/users/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "서버 오류");
  }

  if (!data.isSuccess) {
    throw new Error(data.message || "회원가입 실패 ❌");
  }

  return data;
};
