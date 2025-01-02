import { View, Text, Image } from "react-native";
import React from "react";

export type LessonCardProps = {
  image: string;
  title: string;
  total: number;
  completed: number;
  index: number;
  isLast: boolean;
};

const LessonCard = ({ title, image, total, completed, index, isLast }: LessonCardProps) => {
  return (
    <View className={`flex justify-between flex-row w-full pr-2 rounded-xl max-h-28 bg-white ml-4 ${isLast ? "mb-4" : ""}`}>
      <View className="flex flex-col items-center h-full">
        {index !== 0 ? <View className="h-8 w-2 bg-green-400" /> : <View className="mt-8" />}
        <Image
          source={{
            uri: image
          }}
          className={`aspect-square h-full max-h-20 rounded-full border-2 border-green-400`}
        />
      </View>

      <View className="flex flex-col items-start w-9/12 p-2 pt-8 h-full justify-between">
        <Text className="font-bold text-lg line-clamp-2">{title}</Text>

        <Text className="text-slate-500 text-sm">
          {completed}/{total}
        </Text>
      </View>
    </View>
  );
};

export default LessonCard;
