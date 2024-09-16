import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./FooterStyle";
import HomeSvg from "../../../assets/svg/HomeSvg";
import BoxPackingSvg from "../../../assets/svg/BoxPackingSvg";
import ChartLineSvg from "../../../assets/svg/CharLineSvg";
import GearSvg from "../../../assets/svg/GearSvg";

//Lista de objetos com as os icones e textos
const footerItems = [
  { id: 1, icon: <HomeSvg />, label: "Home", screen: 'TelaMenu' },
  { id: 2, icon: <BoxPackingSvg />, label: "Estoque", screen: 'GerenciamentoDeEstoque' },
  { id: 3, icon: <ChartLineSvg />, label: "Relatórios", screen: 'Relatorios'  },
  { id: 4, icon: <GearSvg />, label: "Ajustes", screen: 'Ajustes' },
];


export default function Footer({navigation}) {
  return (
    <View style={styles.Footer}>
      {/* Função que irá iterar a cada item listado no objeto */}
      {footerItems.map((item) => (
        <View key={item.id} style={styles.IconContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          >{item.icon}</TouchableOpacity>
          <Text style={styles.text}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}
