import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native"; // Added SafeAreaView
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

import Header from "./components/Header";
import ProfileImage from "./components/ProfileImage";
import Bio from "./components/Bio";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import {
  PROFILE_DATA,
  SOCIAL_LINKS,
  PROJECTS,
  SKILLS,
} from "./utils/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1, // Ensure content fills the available space
    padding: 20,
    paddingTop: Platform.select({
      web: 90,
      default: Platform.OS === "ios" ? 100 : 110, // Increased padding to avoid header overlap
    }),
    alignItems: "center",
    paddingBottom: Platform.select({ web: 20, default: 50 }), // Added bottom padding for mobile
  },
  section: {
    width: "100%",
    maxWidth: 1200,
    marginBottom: 40,
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.select({ web: 60, default: 30 }), // Adjusted for mobile
    marginBottom: 80,
  },
});

export default function Homepage() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [sectionRefs, setSectionRefs] = useState<Record<string, number>>({});

  const handleLayout = (sectionId: string) => (event: any) => {
    const { y } = event.nativeEvent.layout;
    setSectionRefs((prev) => ({
      ...prev,
      [sectionId]: y - 80, // Subtract header height to account for fixed header
    }));
  };

  const scrollToSection = (sectionId: string) => {
    if (Platform.OS === "web") {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (scrollViewRef.current && sectionRefs[sectionId] !== undefined) {
      scrollViewRef.current.scrollTo({
        y: sectionRefs[sectionId],
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header scrollToSection={scrollToSection} />

      <Animated.View entering={FadeIn.duration(500)}></Animated.View>
      <LinearGradient
        colors={["#1a1a1a", "#2d2d2d", "#3d3d3d"]}
        style={styles.gradient}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={Platform.OS === "web"} // Hide scrollbar on mobile
          scrollEventThrottle={16} // Improve scroll performance
        >
          <Animated.View entering={FadeIn.delay(300)} style={styles.section}>
            <View style={styles.hero}>
              <Animated.View entering={FadeInDown.delay(500)}>
                <ProfileImage imageUrl={PROFILE_DATA.imageUrl} />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(700)}>
                <Bio
                  name={PROFILE_DATA.name}
                  title={PROFILE_DATA.title}
                  description={PROFILE_DATA.description}
                />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(900)}>
                <SocialLinks links={SOCIAL_LINKS} />
              </Animated.View>
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(1100)}
            style={styles.section}
            nativeID="projects"
            onLayout={handleLayout("projects")}
          >
            <Projects projects={PROJECTS} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(1300)}
            style={styles.section}
            nativeID="skills"
            onLayout={handleLayout("skills")}
          >
            <Skills skills={SKILLS} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(1500)}
            style={styles.section}
            nativeID="experience"
            onLayout={handleLayout("experience")}
          >
            <Experience />
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
