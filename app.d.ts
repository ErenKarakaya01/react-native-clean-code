/// <reference types="nativewind/types" />

declare module '*.png' {
  import { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType | undefined;
  export default value;
}

declare module '*.jpg' {
  import { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType | undefined;
  export default value;
}

declare module '*.jpeg' {
  import { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType | undefined;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content | undefined;
}

