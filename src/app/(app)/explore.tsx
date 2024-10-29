import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text } from "react-native";

import { ParallaxScrollView, CollapsibleView } from "@/components/ui/view";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "nativewind";
import PostsList from "@/features/explore/components/PostsList";

export default function TabTwoScreen() {
  const { setColorScheme } = useColorScheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <CollapsibleView title="Animations"><Text>Eren</Text></CollapsibleView>

      <Button
        className="dark:bg-gray-800"
        mode="contained"
        onPress={() => {
          setColorScheme("dark");
        }}
      >
        Dark Mode
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          setColorScheme("light");
        }}
      >
        Light Mode
      </Button>

      <PostsList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute"
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8
  }
});
