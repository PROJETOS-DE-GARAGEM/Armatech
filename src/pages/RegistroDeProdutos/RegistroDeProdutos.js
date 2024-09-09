import React from "react";
import { View, Text } from "react-native-animatable";
import Header from "../../components/Header/Header";
import style from "./RegistroDeProdutosStyle";
import Footer from "../../components/Footer/Footer";

export default function RegistroDeProdutos () {
  return (
    <View style={style.container}>
      <Header titulo="Registro de Produtos" />
      <View></View>
      <Footer />
    </View>
  );
}
