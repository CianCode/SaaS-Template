import { Metadata } from "next";
import React from "react";

import LoginForm from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md bg-gray-50">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
