import { FontAwesome } from "@expo/vector-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "envelope" | "phone";
  label: string;
}

export default SocialLink;
