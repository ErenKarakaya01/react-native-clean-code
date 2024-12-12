import { View } from "react-native";
import React from "react";
import { CollapsibleView } from "@/components/ui/view";
import { LessonCardProps } from "./lesson-card";

export type CategoryCardProps = {
  title: string;
  lessons: LessonCardProps[];
};

const CategoryCard = () => {
  return (
    <CollapsibleView title="Category">
      <View></View>
    </CollapsibleView>
  );
};

export default CategoryCard;
