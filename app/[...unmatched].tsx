import React from "react";
import { Redirect } from "expo-router";

export default function Unmatched() {
  return <Redirect href="/not-found" />;
}
