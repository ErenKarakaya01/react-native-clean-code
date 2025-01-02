import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./category-card";
import { usePosts } from "../api/get-posts";

export type CategoriesListProps = {};

const CategoriesList = ({}: CategoriesListProps) => {
  const postsQuery = usePosts({});

  const posts = postsQuery?.data;
  return (
    <ScrollView className="px-8">
      {posts?.map((post) => (
        <CategoryCard
          key={post.id}
          id={post.id}
          title={post.title}
          lessons={posts.splice(0, 5)?.map((post, index) => ({
            image: "https://picsum.photos/200",
            title: post.title,
            total: 10,
            completed: 5,
            index: index,
            isLast: 5 - 1 === index
          }))}
          percentage={100}
          image="https://picsum.photos/200"
        />
      ))}
    </ScrollView>
  );
};

export default CategoriesList;
