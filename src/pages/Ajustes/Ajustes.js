import React from "react";
import { View } from "react-native";
import style from "../Ajustes/AjustesStyle";
import Header from "../../components/Header/Header";

export default function Ajustes({navigation}){
    return (
        <View style={style.container}>
        <Header titulo="Ajustes" navigation={navigation} />
        <View></View>

      </View>
    );
}