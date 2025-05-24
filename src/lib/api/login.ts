import { API_URLS } from "./apiUrls";

export const login = async ({
  loginId,
  password,
}: {
  loginId: string;
  password: string;
}) => {
  const response = await fetch(API_URLS.Login, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ loginId, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "서버 오류");
  }

  if (!data.isSuccess) {
    throw new Error(data.message || "로그인 실패 ❌");
  }

  return data;
};
