"use client";

import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export const useLogout = () => {
  const router = useRouter();

  return () => {
    deleteCookie("accessToken");

    router.push("/");
  };
};
