import { FontAwesome } from "@expo/vector-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

export default SocialLink;
