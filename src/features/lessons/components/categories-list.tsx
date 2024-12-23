import { View } from "react-native";
import React from "react";
import CategoryCard, { CategoryCardProps } from "./category-card";
import { usePosts } from "../api/get-posts";
import { List } from "react-native-paper";

export type CategoriesListProps = {};

const CategoriesList = ({}: CategoriesListProps) => {
  const postsQuery = usePosts({});

  const posts = postsQuery?.data;
  return (
    <List.AccordionGroup>
      {posts?.map((post) => (
        <CategoryCard
          key={post.id}
          id={post.id}
          title={post.title}
          lessons={posts?.map((post) => ({
            image: "https://picsum.photos/200",
            title: post.title,
            total: 10,
            completed: 5
          }))}
        />
      ))}
    </List.AccordionGroup>
  );
};

export default CategoriesList;
