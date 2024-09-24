import React from "react";
import { View } from "react-native";
import style from "./IntegracaoDeVendasStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function IntegracaoDeVendas({navigation}){
    return (
        <View style={style.container}>
        <Header titulo="Integração de Vendas" navigation={navigation} />
        <View></View>
        <Footer />
      </View>
    );
}