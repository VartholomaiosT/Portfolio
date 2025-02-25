import React, { useRef } from "react";
import { ScrollView, View, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import Bio from "../components/Bio";
import SocialLinks from "../components/SocialLinks";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import {
  PROFILE_DATA,
  SOCIAL_LINKS,
  PROJECTS,
  SKILLS,
} from "../utils/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  gradient: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: Platform.select({ web: 90, default: 20 }),
    minHeight: "100%",
    alignItems: "center",
  },
  section: {
    width: "100%",
    maxWidth: 1200,
    marginBottom: 40,
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.select({ web: 60, default: 20 }),
    marginBottom: 80,
  },
});

export default function MainScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToSection = (sectionId: string) => {
    const sectionY = {
      projects: 0,
      skills: 500,
      experience: 1000,
      contact: 1500,
    }[sectionId];

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: sectionY, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(800)}>
        <Header scrollToSection={scrollToSection} />
      </Animated.View>
    </View>
  );
}
