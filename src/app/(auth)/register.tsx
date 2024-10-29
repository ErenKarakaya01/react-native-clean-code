import RegisterForm from "@/features/auth/components/register-form";
import React from "react";
import { router } from "expo-router";

const LoginRoute = () => {
  return (
    <RegisterForm
      onSuccess={() => {
        router.dismissAll();
        router.replace("/(app)");
      }}
    />
  );
};

export default LoginRoute;
