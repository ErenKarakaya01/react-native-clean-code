import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";

const CollapsibleView = ({ children, title }: PropsWithChildren & { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <View>
      <TouchableOpacity style={styles.heading} onPress={() => setIsOpen((value) => !value)} activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  content: {
    marginTop: 6,
    marginLeft: 24
  }
});
