import React from "react";
import { Stack } from "expo-router";
import AuthLayoutComponent from "@/components/layouts/auth-layout";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <AuthLayoutComponent>
      <Stack screenOptions={{ headerShown: false, contentStyle: styles.contentStyle }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </AuthLayoutComponent>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: "transparent"
  }
});
