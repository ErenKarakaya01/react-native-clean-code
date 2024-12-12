import { View } from "react-native";
import React from "react";
import CategoryCard, { CategoryCardProps } from "./category-card";

export type CategoriesListProps = {
  categories: CategoryCardProps[];
};

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <View className="flex flex-col gap-2">
      <CategoryCard />
    </View>
  );
};

export default CategoriesList;
