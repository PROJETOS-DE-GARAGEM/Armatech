import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../DrawerContent/DrawerContentStyle"
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

//Função para conter as rotas da barra lateral 
export default function DrawerContent(props) {
  const userName = "Usuário";
  return (
    <DrawerContentScrollView {...props}>
      {/* Logo e Mensagem de Bem-vindo */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/tela-login.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Bem-vindo, {userName}.</Text>
      </View>
      {/* Itens do Drawer */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

