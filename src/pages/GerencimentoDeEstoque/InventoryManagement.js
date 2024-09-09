import React from "react";
import { View, Text } from "react-native-animatable";
import style from "./InventoryManagementStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function InventoryMenagement() {
  return (
    <View style={style.container}>
      <Header titulo="Gerenciamento de Estoque"/>
      <View>
      </View>
      <Footer/>
    </View>
  );
}
