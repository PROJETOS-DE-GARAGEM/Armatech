import React from "react";
import { View } from "react-native";
import style from "./ControleDeForncedoresStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ControleDeFornecedores({navigation}){
    return (
        <View style={style.container}>
        <Header titulo="Controle de Fornecedores" navigation={navigation} />
        <View></View>
        <Footer />
      </View>
    );
}