import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderStyle";

export default function Header({ titulo }) {
  return (
    <View style={styles.header}>
      <Text>{titulo}</Text>
    </View>
  );
}

