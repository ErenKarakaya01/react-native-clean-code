import { View, Text, Image } from "react-native";
import React from "react";
import { ProgressBar } from "@/components/ui/progress";
import { Icon } from "react-native-paper";

type CategoryCardProps = {
  title: string;
  percentage: number;
  image: string;
};

const CategoryCard = ({ title, percentage, image }: CategoryCardProps) => {
  return (
    <View className="flex justify-between flex-row my-2 w-full rounded-xl max-h-24 bg-white">
      <Image
        source={{
          uri: image
        }}
        className="aspect-square h-full rounded-l-xl"
      />

      <View className="flex flex-col items-start w-8/12 p-2 h-full justify-between">
        <Text className="font-bold text-lg">{title}</Text>

        <ProgressBar progress={percentage / 100} color={"green"} className="w-full" />

        <Text className="text-slate-500 text-sm">{percentage}%</Text>
      </View>

      <View className="w-1/12 flex items-center justify-center h-full">
        <Icon source="chevron-right" size={24} />
      </View>
    </View>
  );
};

export default CategoryCard;
