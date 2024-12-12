import CategoriesList from "@/features/discover/components/categories-list";
import { View } from "react-native";

export default function DiscoverRoute() {
  return (
    <View className="flex-1">
      <CategoriesList />
    </View>
  );
}
