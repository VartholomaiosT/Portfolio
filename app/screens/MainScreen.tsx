import React, { useRef } from "react";
import { ScrollView } from "react-native";
import Header from "../components/Header";
// ...existing imports...

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
    <>
      <Header scrollToSection={scrollToSection} />
      <ScrollView ref={scrollViewRef}>{/* Your sections here */}</ScrollView>
    </>
  );
}
