import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import LessonCard, { LessonCardProps } from "./lesson-card";
import { AccordionItem } from "@/components/ui/accordion";
import { useSharedValue } from "react-native-reanimated";
import { ProgressBar } from "@/components/ui/progress";
import { Icon } from "react-native-paper";

export type CategoryCardProps = {
  title: string;
  percentage: number;
  image: string;
  lessons: LessonCardProps[];
  id: number;
};

const CategoryCard = ({ title, lessons, id, percentage, image }: CategoryCardProps) => {
  const open = useSharedValue(false);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <TouchableOpacity
      className="bg-white my-2 rounded-xl"
      onPress={() => {
        open.value = !open.value;
        setExpanded(!expanded);
      }}
    >
      <View className="flex justify-between flex-row w-full rounded-xl max-h-24">
        <Image
          source={{
            uri: image
          }}
          className="aspect-square h-full rounded-l-xl"
        />

        <View className="flex flex-col items-start w-8/12 p-2 h-full justify-between">
          <Text className="font-bold text-lg line-clamp-2">{title}</Text>

          <ProgressBar progress={percentage / 100} color={"green"} className="w-full" />

          <Text className="text-slate-500 text-sm">{percentage}%</Text>
        </View>

        <View className="w-1/12 flex items-center justify-center h-full">
          {expanded ? <Icon source="chevron-down" size={24} /> : <Icon source="chevron-right" size={24} />}
        </View>
      </View>
      <AccordionItem isExpanded={open} key={id} className="w-full">
        {lessons.map((lesson, index) => (
          <LessonCard {...lesson} key={index} />
        ))}
      </AccordionItem>
    </TouchableOpacity>
  );
};

export default CategoryCard;
