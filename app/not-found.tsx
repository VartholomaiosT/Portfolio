import React from "react";
import { View, StyleSheet, Platform, Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    maxWidth: 600,
    width: "100%",
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 18,
    color: "#cccccc",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        backdropFilter: "blur(10px)",
      },
    }),
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1a1a1a", "#2d2d2d", "#3d3d3d"]}
        style={styles.gradient}
      >
        <Animated.View entering={FadeIn.delay(300)} style={styles.content}>
          <FontAwesome
            name="compass"
            size={64}
            color="#ffffff"
            style={styles.icon}
          />
          <Animated.Text entering={FadeIn.delay(400)} style={styles.title}>
            Page Not Found
          </Animated.Text>
          <Animated.Text entering={FadeIn.delay(500)} style={styles.message}>
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track!
          </Animated.Text>
          <Pressable
            style={styles.button}
            onPress={() => router.replace("/homepage")}
          >
            <FontAwesome name="home" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>Return to Homepage</Text>
          </Pressable>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
