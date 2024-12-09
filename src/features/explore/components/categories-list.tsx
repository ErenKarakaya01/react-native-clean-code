import { ScrollView } from "react-native";
import React, { Fragment } from "react";
import { usePosts } from "../api/get-posts";
import CategoryCard from "./category-card";

const CategoriesList = () => {
  const postsQuery = usePosts({});

  const posts = postsQuery?.data;

  return (
    <ScrollView className="px-8">
      {posts?.map((post) => ( 
        <Fragment key={post.id}>
          <CategoryCard
            image="https://picsum.photos/200"
            title="title"
            percentage={100}
          />
        </Fragment>
      ))}
    </ScrollView>
  );
};

export default CategoriesList;
