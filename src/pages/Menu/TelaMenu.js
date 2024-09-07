import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";

export default function TelaMenu() {
  return (
    <View style={styles.container}>
      <Header titulo="Armatech" />
      <TouchableOpacity>
        <Text>Tela Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },
});
