import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

interface ExperienceProps {
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
    marginBottom: 30,
    textAlign: "center",
  },
  timeline: {
    width: "100%",
  },
  timelineItem: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    ...Platform.select({
      web: {
        borderLeftWidth: 4,
        borderLeftColor: "#4A90E2",
        transition: "all 0.2s ease-in-out",
        transform: [{ translateX: 0 }],
      },
      default: {
        borderLeftWidth: 4,
        borderLeftColor: "#4A90E2",
      },
    }),
  },
  timelineItemHovered: Platform.select({
    web: {
      transform: [{ translateX: 10 }],
      backgroundColor: "rgba(255,255,255,0.08)",
    },
    default: {},
  }),
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    color: "#4A90E2",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#999999",
  },
  location: {
    fontSize: 14,
    color: "#999999",
  },
  description: {
    fontSize: 15,
    color: "#cccccc",
    lineHeight: 24,
  },
  bulletPoints: {
    marginTop: 12,
  },
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bulletIcon: {
    marginRight: 8,
    marginTop: 4,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: "#cccccc",
    lineHeight: 22,
  },
  sectionDivider: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 30,
  },
  educationItem: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    ...Platform.select({
      web: {
        borderLeftWidth: 4,
        borderLeftColor: "#6C5CE7",
      },
      default: {
        borderLeftWidth: 4,
        borderLeftColor: "#6C5CE7",
      },
    }),
  },
  degree: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
    paddingRight: 30,
  },
  school: {
    fontSize: 16,
    color: "#6C5CE7",
    marginBottom: 4,
  },
});

export default function Experience({ delay = 1900 }: ExperienceProps) {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const getTimelineItemStyle = (id: string) => {
    return [
      styles.timelineItem,
      hoveredItem === id && styles.timelineItemHovered,
    ];
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(delay)}
      style={styles.container}
      id="experience"
    >
      <Animated.Text style={styles.title}>Experience & Education</Animated.Text>

      <View style={styles.timeline}>
        <Animated.View
          entering={FadeInDown.delay(delay + 100)}
          style={getTimelineItemStyle("current-role")}
          {...Platform.select({
            web: {
              onMouseEnter: () => setHoveredItem("current-role"),
              onMouseLeave: () => setHoveredItem(null),
            },
          })}
        >
          <View style={styles.itemHeader}>
            <View>
              <Animated.Text style={styles.company}>Pragma-IoT</Animated.Text>
              <Animated.Text style={styles.position}>
                Web Developer
              </Animated.Text>
              <Animated.Text style={styles.date}>
                Mar 2023 – Present
              </Animated.Text>
              <Animated.Text style={styles.location}>
                Thessaloniki, Greece
              </Animated.Text>
            </View>
            <FontAwesome name="building" size={20} color="#4A90E2" />
          </View>
          <View style={styles.bulletPoints}>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Deployed and maintained mobile applications on Android and iOS
                platforms, managing submission processes for Google Play Store
                and Apple App Store
              </Animated.Text>
            </View>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Developed dynamic websites using Liferay, including projects for
                government departments
              </Animated.Text>
            </View>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Designed a complex multi-tenant architecture enabling dynamic
                location selection and seamless data integration across
                components
              </Animated.Text>
            </View>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Developed and integrated RESTful APIs for PV ProVision
                (Angular/Ionic) to enable dynamic data interactions and
                real-time connectivity diagnostics
              </Animated.Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(delay + 200)}
          style={getTimelineItemStyle("internship")}
          {...Platform.select({
            web: {
              onMouseEnter: () => setHoveredItem("internship"),
              onMouseLeave: () => setHoveredItem(null),
            },
          })}
        >
          <View style={styles.itemHeader}>
            <View>
              <Animated.Text style={styles.company}>Pragma-IoT</Animated.Text>
              <Animated.Text style={styles.position}>
                Front-End Developer (Internship)
              </Animated.Text>
              <Animated.Text style={styles.date}>
                Oct 2022 – Mar 2023
              </Animated.Text>
              <Animated.Text style={styles.location}>
                Thessaloniki, Greece
              </Animated.Text>
            </View>
            <FontAwesome name="code" size={20} color="#4A90E2" />
          </View>
          <View style={styles.bulletPoints}>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Refactored and redesigned existing front-end codebases using
                HTML, CSS, Angular, and TypeScript
              </Animated.Text>
            </View>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Contributed to the development of dynamic, responsive web
                applications, collaborating closely with senior developers
              </Animated.Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(delay + 300)}
          style={getTimelineItemStyle("eshop")}
          {...Platform.select({
            web: {
              onMouseEnter: () => setHoveredItem("eshop"),
              onMouseLeave: () => setHoveredItem(null),
            },
          })}
        >
          <View style={styles.itemHeader}>
            <View>
              <Animated.Text style={styles.company}>
                Tapandaola.gr
              </Animated.Text>
              <Animated.Text style={styles.position}>
                E-Shop Product Editor
              </Animated.Text>
              <Animated.Text style={styles.date}>
                Aug 2020 – Apr 2021
              </Animated.Text>
              <Animated.Text style={styles.location}>
                Thessaloniki, Greece
              </Animated.Text>
            </View>
            <FontAwesome name="shopping-cart" size={20} color="#4A90E2" />
          </View>
          <View style={styles.bulletPoints}>
            <View style={styles.bullet}>
              <FontAwesome
                name="check"
                size={14}
                color="#4A90E2"
                style={styles.bulletIcon}
              />
              <Animated.Text style={styles.bulletText}>
                Managed product listings and content updates for an e-commerce
                website, enhancing user experience
              </Animated.Text>
            </View>
          </View>
        </Animated.View>

        <View style={styles.sectionDivider} />

        <Animated.View
          entering={FadeInDown.delay(delay + 400)}
          style={styles.educationItem}
        >
          <View style={styles.itemHeader}>
            <View>
              <Animated.Text style={styles.degree}>
                B.Sc. in Computer Engineering
              </Animated.Text>
              <Animated.Text style={styles.school}>
                International Hellenic University
              </Animated.Text>
              <Animated.Text style={styles.date}>2016 – 2023</Animated.Text>
              <Animated.Text style={styles.location}>
                Serres, Greece
              </Animated.Text>
            </View>
            <FontAwesome name="graduation-cap" size={20} color="#6C5CE7" />
          </View>
          <Animated.Text style={styles.description}>
            Specialized in Informatics & Telecommunications
          </Animated.Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
}
