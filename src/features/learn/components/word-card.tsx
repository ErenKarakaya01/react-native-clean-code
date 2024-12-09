import { View, Image, Text } from "react-native";
import React from "react";
import { Word } from "../types/word";

type WordCardProps = {
  word: Word;
};

const WordCard = ({ word }: WordCardProps) => {
  return (
    <View className="flex-1 flex flex-col bg-white">
      <Image source={{ uri: word.imageSrc }} className="w-full h-80 object-cover" />
      <View className="flex-1 flex flex-col gap-2 p-4">
        <Text className="text-2xl font-bold">{word.text}</Text>
        <Text className="text-slate-500 text-xl">{word.spelling} /*</Text>
        <Text className="text-purple-500">{word.description}</Text>
        <Text>{word.example}</Text>
      </View>
    </View>
  );
};

export default WordCard;
