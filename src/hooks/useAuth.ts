"use client";

import { getCookie } from "cookies-next";

export const useAuth = () => {
  const accessToken = getCookie("accessToken");

  const isLoggedIn = !!accessToken;

  return { isLoggedIn, accessToken };
};
