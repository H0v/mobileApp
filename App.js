import React, { useState } from "react";
import { Button, StyleSheet, View, StatusBar } from "react-native";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

StatusBar.setBarStyle("dark-content", true);
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Header />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({});
