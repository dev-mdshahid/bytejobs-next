import Login from "@/components/Login/Login";
import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";
import React from "react";

const LoginPage = () => {
  return (
    <AuthProtectedRoute>
      <Login />
    </AuthProtectedRoute>
  );
};

export default LoginPage;
