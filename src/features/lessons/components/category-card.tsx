import { View, Text } from "react-native";
import React from "react";
import { CollapsibleView } from "@/components/ui/view";
import { LessonCardProps } from "./lesson-card";
import { List } from "react-native-paper";

export type CategoryCardProps = {
  title: string;
  lessons: LessonCardProps[];
  id: number;
};

const CategoryCard = ({ title, lessons, id }: CategoryCardProps) => {
  return (
    <List.Accordion title={title} id={id}>
      <Text>{lessons.toString()}</Text>
    </List.Accordion>
  );
};

export default CategoryCard;
