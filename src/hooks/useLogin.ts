import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";

import { login } from "@/lib/api/login";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("로그인 성공 ✅");
      console.log("응답 코드:", data.code);

      setCookie("accessToken", data.result.accessToken, {
        path: "/",
        maxAge: 60 * 60, // 1시간
      });
      router.push("/");
    },
    // onError: (error: unknown) => {
    //   if (error instanceof Error) {
    //     console.error("로그인 실패 ❌", error.message);
    //   } else {
    //     console.error("로그인 실패 ❌ 알 수 없는 에러 발생");
    //   }
    // },
  });
};
