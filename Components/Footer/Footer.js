import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
    width: "100%",
    backgroundColor: "#dfdfdf",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
