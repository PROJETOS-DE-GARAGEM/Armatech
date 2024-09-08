import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./FooterStyle";
import HomeSvg from "../../../assets/svg/HomeSvg";
import BoxPackingSvg from "../../../assets/svg/BoxPackingSvg";
import ChartLineSvg from "../../../assets/svg/CharLineSvg";
import GearSvg from "../../../assets/svg/GearSvg";

const footerItems = [
  { id: 1, icon: <HomeSvg />, label: "Home" },
  { id: 2, icon: <BoxPackingSvg />, label: "Estoque" },
  { id: 3, icon: <ChartLineSvg />, label: "Relatórios" },
  { id: 4, icon: <GearSvg />, label: "Ajustes" },
];

export default function Footer() {
  return (
    <View style={styles.Footer}>
      {footerItems.map((item) => (
        <View key={item.id} style={styles.IconContainer}>
          <TouchableOpacity>{item.icon}</TouchableOpacity>
          <Text styles={styles.text}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}
