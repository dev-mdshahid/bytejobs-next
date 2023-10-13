"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

type ProtectedRoutePropsType = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  if (session.status === "unauthenticated") {
    router.push(`/login?redirect=${pathname}`);
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
