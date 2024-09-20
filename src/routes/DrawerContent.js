import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Routes from "./Routes";

const drawerItems = [
  {
    label: "Registro de Produtos",
    icon: "",
    rouyes: "RegistroDeProdutos",
  },

  {
    label: "Processamento de Compras",
    icon: "",
    route: "ProcessamentoDeCompras",
  },
  {
    label: "Controle de Fornecedores",
    icon: "",
    route: "ControleDeFornecedores",
  },
  {
    label: "Intregração de Vendas",
    icon: "",
    route: "Integração de Vendas",
  },
  {
    label: "Usuários e Permissões",
    icon: "",
    route: "",
  },
];

export default function DrawerContent(props) {
  const userName = "Usuário";
  return (
    <DrawerContentScrollView {...props}>
      {/* Logo e Mensagem de Bem-vindo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/tela-login.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Bem-vindo, {userName}.</Text>
      </View>
      {/* Itens do Drawer */}
      <DrawerItemList {...props} />

      {/* Renderizar itens dinamicamente com map */}
      {/* {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          label={item.label}
          icon={({ color, size }) => (
            <Ionicons name={item.icon} size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(item.route)}
        />
      ))} */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#283949", // Cor de fundo do cabeçalho
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  userContainer: {
    backgroundColor: "#007bff", // Cor de fundo do nome do usuário
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 16,
  },
});
