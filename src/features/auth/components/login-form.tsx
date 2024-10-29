import { View, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { router } from "expo-router";

import reactLogo from "@/assets/images/react-logo.png";
import microsoftLogin from "@/assets/images/microsoft-login.png";
import googleLogin from "@/assets/images/google-login.png";

type LoginFormProps = {
  onSuccess: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return (
    <View className="flex-1 flex items-center justify-center p-10 gap-y-4">
      <Image source={reactLogo} className="w-52 h-52" />

      <TextInput
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        className="w-full"
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        className="w-full"
      />

      <Button
        className="w-full p-2"
        mode="contained"
        onPress={() => {
          onSuccess();
        }}
      >
        Login
      </Button>

      <View className="flex flex-row gap-x-3">
        <Image source={microsoftLogin} className="w-10 h-10" />

        <Image source={googleLogin} className="w-10 h-10" />
      </View>

      <View className="w-full flex-row justify-between">
        <Text
          className="text-blue-500"
          onPress={() => {
            onSuccess();
          }}
        >
          Forgot password?
        </Text>

        <Text
          className="text-blue-500"
          onPress={() => {
            router.push("/register");
          }}
        >
          Create account
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
