import React from "react";
import { View } from "react-native";
import style from "../Perfil/PerfilStyle";
import Header from "../../components/Header/Header";

export default function Perfil({navigation}){
    return (
        <View style={style.container}>
        <Header titulo="Perfil" navigation={navigation} />
        <View></View>

      </View>
    );
}