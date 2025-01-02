import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  SharedValue
} from "react-native-reanimated";

type AccordionItemProps = {
  isExpanded: SharedValue<boolean>;
  children: ReactNode;
  className?: string;
  style?: StyleSheet.NamedStyles<any>;
  duration?: number;
};

const AccordionItem = ({ isExpanded, children, className, style, duration = 500 }: AccordionItemProps) => {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value
  }));

  return (
    <Animated.View
      style={[bodyStyle, style]}
      className={`${className} overflow-hidden w-full`}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        className="w-full absolute flex items-center"
      >
        {children}
      </View>
    </Animated.View>
  );
};

export default AccordionItem;
