import React from "react";
import { Stack } from "expo-router";

const WordsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[words]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default WordsLayout;
