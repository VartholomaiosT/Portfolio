import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  useWindowDimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1000,
    ...Platform.select({
      web: {
        position: "fixed" as "absolute",
        top: 0,
      },
      default: {
        position: "relative",
        paddingTop: StatusBar.currentHeight || 0,
      },
    }),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Platform.select({ web: 40, default: 20 }),
    backgroundColor: Platform.select({
      web: "rgba(26, 26, 26, 0.85)",
      default: "rgba(26, 26, 26, 0.95)",
    }),
    ...Platform.select({
      web: {
        height: 70,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
      },
      default: {
        height: Platform.OS === "ios" ? 44 : 56, // Standard header heights
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    }),
  },
  nav: {
    flexDirection: "row",
    gap: Platform.select({ web: 30, default: 15 }),
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 8,
    ...Platform.select({
      web: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      },
      default: {
        backgroundColor: "rgba(255,255,255,0.05)",
      },
    }),
  },
  navItemHover: Platform.select({
    web: {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
    default: {},
  }),
  navText: {
    color: "#ffffff",
    fontSize: Platform.select({ web: 16, default: 14 }),
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

interface SectionRef {
  [key: string]: number;
}

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const { height: windowHeight } = useWindowDimensions();
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const handlePress = (sectionId: string) => {
    if (Platform.OS === "web") {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <Animated.View entering={FadeIn} style={styles.header}>
        <Animated.Text style={styles.logo}>VT</Animated.Text>
        <View style={styles.nav}>
          {[
            { id: "projects", icon: "code", label: "Projects" },
            { id: "skills", icon: "wrench", label: "Skills" },
            { id: "experience", icon: "briefcase", label: "Experience" },
          ].map((item) => (
            <Pressable
              key={item.id}
              style={({ pressed }) => [
                styles.navItem,
                hoveredItem === item.id && styles.navItemHover,
                pressed && Platform.OS !== "web" && { opacity: 0.7 },
              ]}
              onPress={() => handlePress(item.id)}
              {...Platform.select({
                web: {
                  onMouseEnter: () => setHoveredItem(item.id),
                  onMouseLeave: () => setHoveredItem(null),
                },
              })}
            >
              <FontAwesome name={item.icon as any} size={16} color="#ffffff" />
              <Animated.Text style={styles.navText}>{item.label}</Animated.Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}
