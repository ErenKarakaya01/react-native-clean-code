import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Platform, StyleSheet } from "react-native";

import { OS } from "@/types/enums";
import React from "react";
import { AppProvider } from "./provider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <Stack screenOptions={{ contentStyle: styles.contentStyle, headerShown: false }}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="learn" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    //paddingTop: Platform.OS === OS.ANDROID ? 0 : 0,
    flex: 1,
    backgroundColor: "white"
  }
});

export default RootLayout;
