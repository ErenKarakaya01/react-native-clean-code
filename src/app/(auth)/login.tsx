import LoginForm from "@/features/auth/components/login-form";
import React from "react";
import { router } from "expo-router";

const LoginRoute = () => {
  return (
    <LoginForm
      onSuccess={() => {
        router.dismissAll();
        router.replace("/");
      }}
    />
  );
};

export default LoginRoute;
