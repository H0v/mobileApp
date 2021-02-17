import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => alert("hi")}>
        <Text style={styles.adress}>
          адрес доставки:<Text style={styles.cityTitle}> Ереван</Text> {">"}
        </Text>
      </TouchableWithoutFeedback>
      <View style={styles.searchInput}>
        <TextInput placeholder="Поиск по товарам и магазинам &#128269;"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    width: "100%",
    backgroundColor: "#dfdfdf",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  adress: {
      paddingTop:10,
    //   paddingBottom:10,
    color: "gray",
  },
  cityTitle: {
    color: "black",
  },
  searchInput: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: "90%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    fontSize: 30,
    justifyContent: "center",
  },
});
