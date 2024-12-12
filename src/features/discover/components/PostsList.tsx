import { View, Text } from "react-native";
import React from "react";
import { usePosts } from "../api/get-posts";

const PostsList = () => {
  const postsQuery = usePosts({});

  const posts = postsQuery?.data;

  return (
    <View className="flex-1">
      {posts?.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
      {postsQuery?.isLoading && <Text>Loading...</Text>}

      <Text>{posts === undefined && "No posts"}</Text>
      <Text>{postsQuery?.error?.message}</Text>
    </View>
  );
};

export default PostsList;
