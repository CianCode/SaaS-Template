import { Metadata } from "next";
import React from "react";

import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md bg-gray-50">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
