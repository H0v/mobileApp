import React, { useState } from "react";
import { Button, StyleSheet, Text, View ,StatusBar} from "react-native";
import Header from "./Components/Header/Header";

StatusBar.setBarStyle('dark-content', true);
export default function App() {
  return <Header />;
}

const styles = StyleSheet.create({});
