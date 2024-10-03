import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./FooterStyle";
import HomeSvg from "../../../assets/svg/HomeSvg";
import UserSvg from "../../../assets/svg/UserSvg";
import GearSvg from "../../../assets/svg/GearSvg";

//Lista de objetos com as os icones e textos
const footerItems = [
  { id: 1, icon: <UserSvg />, label: "Perfil" },
  { id: 2, icon: <HomeSvg />, label: "Home" },
  { id: 3, icon: <GearSvg />, label: "Ajustes" },
];


export default function Footer() {
  return (
    <View style={styles.Footer}>
      {/* Função que irá iterar a cada item listado no objeto */}
      {footerItems.map((item) => (
        <View key={item.id} style={styles.IconContainer}>
          <TouchableOpacity>{item.icon}</TouchableOpacity>
          <Text styles={styles.text}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}
