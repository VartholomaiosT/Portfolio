import React from "react";
import { View, Pressable, StyleSheet, Platform, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Icons } from "./Icons";

interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "envelope" | "phone";
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  delay?: number;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 40,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        backdropFilter: "blur(10px)",
      },
    }),
  },
  socialButtonPressed: {
    transform: [{ scale: 0.95 }],
    backgroundColor: "rgba(255,255,255,0.15)",
  },
});

export default function SocialLinks({ links, delay = 1300 }: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <Icons.linkedin size={24} />;
      case "github":
        return <Icons.github size={24} />;
      case "envelope":
        return <Icons.email size={24} />;
      case "phone":
        return <Icons.phone size={24} />;
      default:
        return null;
    }
  };

  return (
    <Animated.View entering={FadeInDown.delay(delay)} style={styles.container}>
      {links.map((link) => (
        <AnimatedPressable
          key={link.name}
          style={({ pressed }) => [
            styles.socialButton,
            pressed && styles.socialButtonPressed,
          ]}
          onPress={() => Linking.openURL(link.url)}
          accessibilityLabel={link.label}
          accessibilityRole="link"
        >
          {getIcon(link.icon)}
        </AnimatedPressable>
      ))}
    </Animated.View>
  );
}
