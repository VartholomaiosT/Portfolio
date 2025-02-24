import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface SkillsProps {
  skills: {
    programming: string[];
    technologies: string[];
    certifications: string[];
    languages: { name: string; level: string }[];
    additional: string[];
  };
  delay?: number;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 15,
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  skill: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    ...Platform.select({
      web: {
        backdropFilter: "blur(10px)",
        transition: "transform 0.2s ease-in-out",
        ":hover": {
          transform: "translateY(-2px)",
        },
      },
    }),
  },
  skillText: {
    color: "#ffffff",
    fontSize: 14,
  },
  certContainer: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  certText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  languageText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default function Skills({ skills, delay = 1700 }: SkillsProps) {
  return (
    <Animated.View entering={FadeInDown.delay(delay)} style={styles.container}>
      <View style={styles.section}>
        <Animated.Text style={styles.sectionTitle}>
          Programming & Frameworks
        </Animated.Text>
        <View style={styles.skillsContainer}>
          {skills.programming.map((skill, index) => (
            <Animated.View
              key={skill}
              entering={FadeInDown.delay(delay + index * 50)}
              style={styles.skill}
            >
              <Animated.Text style={styles.skillText}>{skill}</Animated.Text>
            </Animated.View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Animated.Text style={styles.sectionTitle}>
          Technologies & Tools
        </Animated.Text>
        <View style={styles.skillsContainer}>
          {skills.technologies.map((tech, index) => (
            <Animated.View
              key={tech}
              entering={FadeInDown.delay(delay + index * 50)}
              style={styles.skill}
            >
              <Animated.Text style={styles.skillText}>{tech}</Animated.Text>
            </Animated.View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Animated.Text style={styles.sectionTitle}>
          Additional Skills
        </Animated.Text>
        <View style={styles.skillsContainer}>
          {skills.additional.map((skill, index) => (
            <Animated.View
              key={skill}
              entering={FadeInDown.delay(delay + index * 50)}
              style={styles.skill}
            >
              <Animated.Text style={styles.skillText}>{skill}</Animated.Text>
            </Animated.View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Animated.Text style={styles.sectionTitle}>
          Certifications
        </Animated.Text>
        {skills.certifications.map((cert, index) => (
          <Animated.View
            key={cert}
            entering={FadeInDown.delay(delay + index * 50)}
            style={styles.certContainer}
          >
            <Animated.Text style={styles.certText}>{cert}</Animated.Text>
          </Animated.View>
        ))}
      </View>

      <View style={styles.section}>
        <Animated.Text style={styles.sectionTitle}>Languages</Animated.Text>
        {skills.languages.map((lang, index) => (
          <Animated.View
            key={lang.name}
            entering={FadeInDown.delay(delay + index * 50)}
            style={styles.languageContainer}
          >
            <Animated.Text style={styles.languageText}>
              {lang.name}
            </Animated.Text>
            <Animated.Text style={styles.languageText}>
              {lang.level}
            </Animated.Text>
          </Animated.View>
        ))}
      </View>
    </Animated.View>
  );
}
