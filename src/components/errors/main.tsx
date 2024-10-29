import { Text, View } from "react-native";
import React from "react";

const MainErrorFallback = () => {
  return (
    <View className="flex-1 flex items-center justify-center">
      <Text className="text-red-500">Something went wrong</Text>
    </View>
  );
};

export default MainErrorFallback;
