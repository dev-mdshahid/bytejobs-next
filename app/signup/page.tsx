import Signup from "@/components/Signup/Signup";
import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";
import React from "react";

const SignupPage = () => {
  return (
    <AuthProtectedRoute>
      <Signup />
    </AuthProtectedRoute>
  );
};

export default SignupPage;
