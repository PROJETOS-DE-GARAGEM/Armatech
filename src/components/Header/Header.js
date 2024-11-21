import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BarsSvg from "../../../assets/svg/BarsSvg";
import styles from "./HeaderStyle";

export default function Header({ titulo, navigation }) {
  return (
    // Container do componente header
    <View style={styles.header}>
      {/* Icon da da barra de menu */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
        <BarsSvg />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{titulo}</Text>
    
  
    </View>
  );
}
