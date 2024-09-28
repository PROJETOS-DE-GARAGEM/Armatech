import React from "react";
import { View } from "react-native";
import style from "./RelatoriosEAnalisesStyle";
import Header from "../../components/Header/Header";

export default function RelatoriosEAnalises({navigation}){
    return (
        <View style={style.container}>
        <Header titulo="Relatórios e Analises" navigation={navigation} />
        <View></View>
      </View>
    );
}