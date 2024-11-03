import { Dimensions } from "react-native";
import React from "react";
import { Carousel } from "@/components/ui/view";
import { Word } from "../types/word";
import WordCard from "./word-card";

type WordsCarouselProps = {
  words: Word[];
};

const WordsCarousel = ({ words = [] }: WordsCarouselProps) => {
  const width = Dimensions.get("window").width;

  return (
    <>
      <Carousel
        windowSize={10}
        mode="parallax"
        style={{ flex: 1 }}
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9
        }}
        pagingEnabled
        loop={false}
        width={width}
        data={words}
        scrollAnimationDuration={100}
        renderItem={({ index }) => <WordCard word={words[index]} />}
      />
    </>
  );
};

export default WordsCarousel;
