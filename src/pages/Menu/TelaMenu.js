import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header/Header";
import styles from "./TelaMenuStyle";
import Footer from "../../components/Footer/Footer";
import BoxSvg from "../../../assets/svg/BoxSvg";
import WarehousSvg from "../../../assets/svg/WarehoseSvg";
import ShoppingCartSvg from "../../../assets/svg/ShoppingCartSvg";
import ChartBarSvg from "../../../assets/svg/ChartBarSvg";
import TruckSvg from "../../../assets/svg/TruckSvg";
import SyncSvg from "../../../assets/svg/SyncSvg";
import UsersSvg from "../../../assets/svg/UsersSvg";

const MenuItens = [
  {
    id: 1,
    icon: <BoxSvg />,
    label: "Registro de Produtos",
    screen: "RegistroDeProdutos",
  },
  {
    id: 2,
    icon: <WarehousSvg />,
    label: "Gerenciamento de Estoque",
    screen: "GerenciamentoDeEstoque",
  },
  {
    id: 3,
    icon: <ShoppingCartSvg />,
    label: "Processamento de Compras",
    screen: "ProcessamentoDeCompras",
  },
  {
    id: 4,
    icon: <ChartBarSvg />,
    label: "Relatórios e Analises",
    screen: "RelatorioDeAnalises",
  },
  {
    id: 5,
    icon: <TruckSvg />,
    label: "Controle de Fornecedores",
    screen: "ControleDeFornecedores",
  },
  {
    id: 6,
    icon: <SyncSvg />,
    label: "Integração de vendas",
    screen: "IntegracaoDeVendas",
  },
  {
    id: 7,
    icon: <UsersSvg />,
    label: "Usuários e Permissões",
    screen: "UsuariosEPermissoes",
  },
];

export default function TelaMenu({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Componente header */}
      <Header titulo="Armatech" navigation={navigation} />
      {/* Componente Card */}
      <Animatable.View animation="fadeInUp" style={styles.cardContainer}>
        {MenuItens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            key={item.id}
          >
            <View style={styles.card}>
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.MenuText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animatable.View>

      {/* Componente footer */}
      <Footer />
    </View>
  );
}
