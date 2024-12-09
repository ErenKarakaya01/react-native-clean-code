import { Image, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ui/view/parallax-scroll-view";

import { Link } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        
        <View className="p-10 bg-red-700 flex items-center justify-center text-white">
          <Link href={"/learn/words/1"}>Words Carousel</Link>
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
