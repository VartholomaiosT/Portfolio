import { loadAsync } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

export async function loadFonts() {
  await loadAsync({
    ...FontAwesome.font,
  });
}
