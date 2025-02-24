import React, { useState } from "react";
import { View, StyleSheet, Platform, TextInput, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

interface ContactProps {
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
  form: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 30,
    borderRadius: 12,
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: "#ffffff",
    fontSize: 16,
    width: "100%",
    ...Platform.select({
      web: {
        outline: "none",
        border: "none",
      },
    }),
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    ...Platform.select({
      web: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          backgroundColor: "#357ABD",
        },
      },
    }),
  },
  submitText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessage: {
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 10,
  },
});

export default function Contact({ delay = 1900 }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(delay)}
      style={styles.container}
      id="contact"
    >
      <Animated.Text style={styles.title}>Get in Touch</Animated.Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#999"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#999"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.nativeEvent.text })
          }
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          placeholderTextColor="#999"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.nativeEvent.text })
          }
          multiline
          numberOfLines={4}
        />
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Animated.Text style={styles.submitText}>Send Message</Animated.Text>
        </Pressable>
        {submitted && (
          <Animated.Text style={styles.successMessage}>
            Message sent successfully!
          </Animated.Text>
        )}
      </View>
    </Animated.View>
  );
}
