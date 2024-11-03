import { View } from "react-native";
import React from "react";
import WordsCarousel from "@/features/learn/components/words-carousel";
import { usePosts } from "@/features/explore/api/get-posts";
//import { useLocalSearchParams } from "expo-router";

const WordsRoute = () => {
  //const { words } = useLocalSearchParams();
  const postsQuery = usePosts({});

  const posts = postsQuery?.data || [];

  return (
    <View className="flex-1">
      <WordsCarousel
        words={posts?.map((post) => {
          return {
            id: post.id.toString(),
            text: post.title,
            description: post.body,
            imageSrc: "https://img.freepik.com/free-photo/outdoors-green-freshness-deciduous-foliage-nature_1417-468.jpg?ga=GA1.1.545448994.1730032902&semt=ais_hybrid",
            spelling: "spelling",
            example: post.title
          };
        })}
      />
    </View>
  );
};

export default WordsRoute;
