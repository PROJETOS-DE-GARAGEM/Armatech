import React from "react";
import { View, Text } from "react-native";
import style from "./ProcessamentoDeComprasStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ProcessamentoDeCompras({ navigation }) {
  return (
    <View style={style.container}>
      <Header titulo="Processamento de Compras" navigation={navigation}/>
      <View></View>
      <Footer />
    </View>
  );
}
