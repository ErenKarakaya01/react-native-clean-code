import LoginForm from "@/features/auth/components/login-form";
import React from "react";
import { router } from "expo-router";

import backgroundImage from "@/assets/images/background.png";
import { ImageBackground } from "react-native";

const LoginRoute = () => {
  return (
    <ImageBackground className="flex flex-col flex-1" source={backgroundImage}>
      <LoginForm
        onSuccess={() => {
          router.dismissAll();
          router.replace("/(app)");
        }}
      />
    </ImageBackground>
  );
};

export default LoginRoute;
