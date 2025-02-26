import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Icons } from "./Icons";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1000,
    position: "fixed",
    top: 0,
    paddingTop: Platform.select({
      web: 0,
      default: StatusBar.currentHeight || 0,
    }),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "rgba(26, 26, 26, 0.95)",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  nav: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  navItemCompact: {
    padding: 8,
    minWidth: 36,
    justifyContent: "center",
  },
  navItemHover: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  navText: {
    color: "#ffffff",
    fontSize: 12,
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
  const { width } = useWindowDimensions();
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  // Determine if we should show compact view
  const isCompact = width < 360; // Apply compact view for small screens

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
            { id: "projects", Icon: Icons.code, label: "Projects" },
            { id: "skills", Icon: Icons.wrench, label: "Skills" },
            { id: "experience", Icon: Icons.briefcase, label: "Experience" },
          ].map((item) => (
            <Pressable
              key={item.id}
              style={({ pressed }) => [
                styles.navItem,
                isCompact && styles.navItemCompact,
                hoveredItem === item.id && styles.navItemHover,
                pressed && { opacity: 0.7 },
              ]}
              onPress={() => handlePress(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <item.Icon size={isCompact ? 14 : 16} color="#ffffff" />
              {!isCompact && (
                <Animated.Text style={styles.navText}>
                  {item.label}
                </Animated.Text>
              )}
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}
