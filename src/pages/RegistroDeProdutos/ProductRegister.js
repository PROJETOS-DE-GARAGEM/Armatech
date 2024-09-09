import React from "react";
import { View, Text } from "react-native-animatable";
import Header from "../../components/Header/Header";
import style from "./ProductRegisterStyle";
import Footer from "../../components/Footer/Footer";

export default function () {
  return (
    <View style={style.container}>
      <Header titulo="Registro de Produtos" />
      <View></View>
      <Footer />
    </View>
  );
}
