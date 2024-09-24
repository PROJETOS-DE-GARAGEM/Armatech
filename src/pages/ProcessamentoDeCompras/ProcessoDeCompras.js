import React from "react";
import { View, Text } from "react-native";
import style from "./ProcessoDeComprasStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ProcessoDeVendas({ navigation }) {
  return (
    <View style={style.container}>
      <Header titulo="Gerenciamento de Estoque" navigation={navigation} />
      <View></View>
      <Footer />
    </View>
  );
}
