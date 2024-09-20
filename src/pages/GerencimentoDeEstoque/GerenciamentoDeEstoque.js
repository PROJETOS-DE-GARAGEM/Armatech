import React from "react";
import { View, Text } from "react-native-animatable";
import style from "./GerenciamentoDeEstoqueStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function GerenciamentoDeEstoque({navigation}) {
  return (
    <View style={style.container}>
      <Header titulo="Gerenciamento de Estoque" navigation={navigation} />
      <View>
      </View>
      <Footer/>
    </View>
  );
}
