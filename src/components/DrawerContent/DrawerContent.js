import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "../DrawerContent/DrawerContentStyle";
import UsuarioService from "../../../service/UsuarioService";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const usuarioService = new UsuarioService();

export default function DrawerContent(props) {
  const [userInfo, setUserInfo] = useState(null);

  // Função para carregar os dados do usuário
  const carregarDadosUsuario = async () => {
    try {
      const dadosUsuario = await usuarioService.pegarDadosUsuario();
      
      // Extrair primeiro e segundo nomes
      const nomeCompleto = dadosUsuario.nome || "Nome indisponível";
      const [primeiroNome, segundoNome] = nomeCompleto.split(" ");
      const nomeFormatado = segundoNome ? `${primeiroNome} ${segundoNome}` : primeiroNome;
      
      // Atualiza o estado com o nome formatado e outros dados
      setUserInfo({ ...dadosUsuario, nome: nomeFormatado });
    } catch (error) {
      console.error("Erro ao carregar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/tela-login.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>
          Bem-vindo, {userInfo?.nome || "Nome indisponível"}.
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
