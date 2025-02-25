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
      <LinearGradient
        colors={["#1a1a1a", "#2d2d2d", "#3d3d3d"]}
        style={styles.gradient}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200)}
            style={styles.section}
          >
            <View style={styles.hero}>
              <ProfileImage imageUrl={PROFILE_DATA.imageUrl} delay={300} />
              <Bio
                name={PROFILE_DATA.name}
                title={PROFILE_DATA.title}
                description={PROFILE_DATA.description}
                nameDelay={500}
                titleDelay={700}
                descriptionDelay={900}
              />
              <SocialLinks links={SOCIAL_LINKS} delay={1100} />
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(1300)}
            style={styles.section}
            nativeID="projects"
          >
            <Projects projects={PROJECTS} delay={1500} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(1700)}
            style={styles.section}
            nativeID="skills"
          >
            <Skills skills={SKILLS} delay={1900} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(2100)}
            style={styles.section}
            nativeID="experience"
          >
            <Experience delay={2300} />
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
