import React from "react";
import { StyleSheet, Platform } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface BioProps {
  name: string;
  title: string;
  description: string;
  nameDelay?: number;
  titleDelay?: number;
  descriptionDelay?: number;
}

const styles = StyleSheet.create({
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: "#e0e0e0",
    marginBottom: 20,
    textAlign: "center",
  },
  bio: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    maxWidth: 600,
    lineHeight: 24,
    ...Platform.select({
      web: {
        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
    }),
  },
});

export default function Bio({
  name,
  title,
  description,
  nameDelay = 700,
  titleDelay = 900,
  descriptionDelay = 1100,
}: BioProps) {
  return (
    <>
      <Animated.Text entering={FadeInDown.delay(nameDelay)} style={styles.name}>
        {name}
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(titleDelay)}
        style={styles.title}
      >
        {title}
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(descriptionDelay)}
        style={styles.bio}
      >
        {description}
      </Animated.Text>
    </>
  );
}
