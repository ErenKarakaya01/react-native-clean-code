import { Dimensions } from "react-native";
import React from "react";
import { Carousel } from "@/components/ui/view";
import { Word } from "../types/word";
import WordCard from "./word-card";

type WordsCarouselProps = {
  words: Word[];
};

const width = Dimensions.get("window").width;
const WordsCarousel = ({ words = [] }: WordsCarouselProps) => {
  return (
    <>
      {/* <Carousel
        windowSize={1}
        mode="parallax"
        style={{ flex: 1 }}
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9
        }}
        pagingEnabled
        loop={false}
        width={200}
        data={words}
        scrollAnimationDuration={100}
        renderItem={({ index }) => (<Text>{index}</Text>)}
      /> */}
      <Carousel
        windowSize={3}
        loop
        width={width}
        autoPlay={false}
        data={words}
        scrollAnimationDuration={700}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => <WordCard word={words[index]} />}
      />
    </>
  );
};

export default WordsCarousel;
