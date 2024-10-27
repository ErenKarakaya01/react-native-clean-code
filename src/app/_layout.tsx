import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Platform, StyleSheet } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { OS } from "@/types/enums";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.navigate("/auth/login");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ contentStyle: styles.contentStyle }}>
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: Platform.OS === OS.ANDROID ? 35 : 0,
    flex: 1,
    backgroundColor: "white",
  },
});
