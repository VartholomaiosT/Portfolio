import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,
  StatusBar,
  LayoutChangeEvent,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { PROJECTS, SKILLS } from "../utils/constants";
import { loadFonts } from "../fonts";
interface SectionRef {
  [key: string]: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.select({
      web: 90,
      ios: Platform.OS === "ios" ? 10 : 0,
      default: 0,
    }),
    paddingBottom: 40,
    paddingHorizontal: Platform.select({
      web: 0,
      default: 16,
    }),
  },
  section: {
    marginTop: 20,
  },
});

export default function Layout() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [sectionRefs, setSectionRefs] = useState<SectionRef>({});
  const { height: windowHeight } = Dimensions.get("window");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handleLayout = useCallback(
    (sectionId: string) => (event: LayoutChangeEvent) => {
      const { y, height } = event.nativeEvent.layout;
      setSectionRefs((prev) => ({
        ...prev,
        [sectionId]: y,
      }));
    },
    []
  );

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (scrollViewRef.current && sectionRefs[sectionId] !== undefined) {
        const offset = sectionRefs[sectionId];
        scrollViewRef.current.scrollTo({
          y: offset,
          animated: true,
        });
      }
    },
    [sectionRefs]
  );

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();

        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // Or a loading component
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(26, 26, 26, 0.95)"
      />
      <Header scrollToSection={scrollToSection} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          onLayout={handleLayout("projects")}
          nativeID="projects"
          style={styles.section}
        >
          <Projects projects={PROJECTS} />
        </View>

        <View
          onLayout={handleLayout("skills")}
          nativeID="skills"
          style={styles.section}
        >
          <Skills skills={SKILLS} />
        </View>

        <View
          onLayout={handleLayout("experience")}
          nativeID="experience"
          style={styles.section}
        >
          <Experience />
        </View>
      </ScrollView>
    </View>
  );
}
