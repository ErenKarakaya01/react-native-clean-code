import { Text, ImageBackground } from "react-native";
import React, { ReactNode } from "react";

import background from "@/assets/images/auth-background.png";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <ImageBackground source={background} className="flex-1">
      {children}
    </ImageBackground>
  );
};

export default AuthLayout;
