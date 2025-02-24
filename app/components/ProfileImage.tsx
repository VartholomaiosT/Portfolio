import React from "react";
import { Image, StyleSheet, Platform, ImageSourcePropType } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface ProfileImageProps {
  imageUrl: string | number | ImageSourcePropType;
  size?: number;
  delay?: number;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function ProfileImage({
  imageUrl,
  size = 150,
  delay = 500,
}: ProfileImageProps) {
  const styles = StyleSheet.create({
    profileImage: {
      width: size,
      height: size,
      borderRadius: size / 2,
      marginBottom: 20,
      ...Platform.select({
        web: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      }),
    },
  });

  const source = typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl;

  return (
    <AnimatedImage
      entering={FadeInDown.delay(delay)}
      source={source}
      style={styles.profileImage}
      accessibilityLabel="Profile picture"
    />
  );
}
