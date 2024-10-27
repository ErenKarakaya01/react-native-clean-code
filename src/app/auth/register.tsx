import RegisterForm from "@/features/auth/components/register-form";
import React from "react";
import { router } from "expo-router";
import { ImageBackground } from "react-native";

import backgroundImage from "@/assets/images/background.png";

const LoginRoute = () => {
  return (
    <ImageBackground className="flex flex-col flex-1" source={backgroundImage}>
      <RegisterForm
        onSuccess={() => {
          router.dismissAll();
          router.replace("/(app)");
        }}
      />
    </ImageBackground>
  );
};

export default LoginRoute;
