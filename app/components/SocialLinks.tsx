import React from "react";
import { View, Pressable, StyleSheet, Platform, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

interface SocialLink {
  name: string;
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
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
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Error opening link:", err);
    });
  };

  return (
    <Animated.View entering={FadeInDown.delay(delay)} style={styles.container}>
      {links.map((link, index) => (
        <AnimatedPressable
          key={link.name}
          style={({ pressed }) => [
            styles.socialButton,
            pressed && styles.socialButtonPressed,
          ]}
          onPress={() => openLink(link.url)}
          accessibilityLabel={link.label}
          accessibilityRole="link"
        >
          <FontAwesome name={link.icon} size={24} color="#fff" />
        </AnimatedPressable>
      ))}
    </Animated.View>
  );
}
