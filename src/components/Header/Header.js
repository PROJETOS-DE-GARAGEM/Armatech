import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BarsSvg from "../../../assets/svg/BarsSvg";
import UserSvg from "../../../assets/svg/UserSvg";

export default function Header({ titulo }) {
  return (
    // Container do componente header
    <View style={styles.header}>
      {/* Icon da da barra de menu */}
      <TouchableOpacity>
        <BarsSvg />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{titulo}</Text>
      {/* Icon do usuario */}
      <TouchableOpacity>
        <UserSvg />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: "8%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
