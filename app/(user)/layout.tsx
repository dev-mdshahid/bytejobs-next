import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React, { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <main className="max-width">{children}</main>
    </ProtectedRoute>
  );
}
