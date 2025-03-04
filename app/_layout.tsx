import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="homepage" />
        <Stack.Screen
          name="not-found"
          options={{
            title: "Not Found",
          }}
        />
      </Stack>
    </>
  );
}
