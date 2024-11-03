import { Stack } from "expo-router";
import React from "react";

const LearnLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="word" options={{ headerShown: false }} />
      <Stack.Screen name="words" options={{ headerShown: false }} />
    </Stack>
  );
};

export default LearnLayout;
