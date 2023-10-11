"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

type AuthProtectedRoutePropsType = {
  children: React.ReactNode;
};

const AuthProtectedRoute = ({ children }: AuthProtectedRoutePropsType) => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  if (session.status === "authenticated") {
    if (redirectUrl === "/") {
      router.back();
    } else {
      router.push(redirectUrl);
    }
  } else {
    return <>{children}</>;
  }
};

export default AuthProtectedRoute;
