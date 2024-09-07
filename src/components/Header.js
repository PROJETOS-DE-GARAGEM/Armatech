import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ titulo }) {
  return (
    <View style={styles.header}>
      <Text>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
  },
  headerImage: {
    width: 50,
    color: "black",
  },
});
