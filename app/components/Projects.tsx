import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
  delay?: number;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  projectContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      web: {
        backdropFilter: "blur(10px)",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        ":hover": {
          transform: "translateY(-5px)",
        },
      },
    }),
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 10,
  },
  technologies: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tech: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    color: "#ffffff",
    fontSize: 12,
  },
});

export default function Projects({ projects, delay = 1500 }: ProjectsProps) {
  return (
    <Animated.View entering={FadeInDown.delay(delay)} style={styles.container}>
      <Animated.Text style={styles.title}>Projects</Animated.Text>
      {projects.map((project, index) => (
        <Animated.View
          key={project.title}
          entering={FadeInDown.delay(delay + index * 100)}
          style={styles.projectContainer}
        >
          <Animated.Text style={styles.projectTitle}>
            {project.title}
          </Animated.Text>
          <Animated.Text style={styles.projectDescription}>
            {project.description}
          </Animated.Text>
          <View style={styles.technologies}>
            {project.technologies.map((tech) => (
              <View key={tech} style={styles.tech}>
                <Animated.Text style={styles.techText}>{tech}</Animated.Text>
              </View>
            ))}
          </View>
        </Animated.View>
      ))}
    </Animated.View>
  );
}
