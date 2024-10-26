import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "../Perfil/PerfilStyle";
import Header from "../../components/Header/Header";
import UsuarioService from "../../../service/UsuarioService";

export default function Perfil({ navigation }) {
  const [userInfo, setUserInfo] = useState(null); // Inicializa como null
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const usuarioService = new UsuarioService();

  // Função para carregar os dados do usuário
  const carregarDadosUsuario = async () => {
    try {
      const dadosUsuario = await usuarioService.pegarDadosUsuario(); // Chama a API

      // Extrair o primeiro e o segundo nome para o nickname
      const nomeCompleto = dadosUsuario.nome || "Nome indisponível";
      const [primeiroNome, segundoNome] = nomeCompleto.split(" ");
      const nickname = segundoNome ? `${primeiroNome} ${segundoNome}` : primeiroNome;

      // Atualiza o estado com o nickname e outros dados do usuário
      setUserInfo({ ...dadosUsuario, nickname });
    } catch (error) {
      console.error("Erro ao carregar os dados do usuário:", error);
    } finally {
      setLoading(false); // Para o indicador de carregamento
    }
  };

  // useEffect para carregar os dados assim que a tela for montada
  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  // Mostra um indicador de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Renderização Condicional para garantir que userInfo não seja null
  if (!userInfo) {
    return (
      <View>
        <Text>Erro ao carregar os dados do usuário.</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Header titulo="Perfil" navigation={navigation} />
      <View style={style.ViewProfile}>
        <View style={style.userBox}>
          <FontAwesome name="user-circle-o" size={100} color="#fff" />
          <View>
            {/* Exibe o nickname próximo ao ícone de usuário */}
            <Text style={style.NameUser}>
              {userInfo.nickname || "Nome indisponível"}
            </Text>
            {/* Botão Logout */}
            <TouchableOpacity
              style={style.buttonLogout}
              onPress={() => usuarioService.logout(navigation)}
            >
              <Text style={style.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerInformation}>
          <View>
            <Text style={style.informationTitle}>Nome Completo</Text>
            <TextInput
              style={style.Input}
              value={userInfo.nome || "Nome indisponível"}
              editable={false} 
            />
            
            <Text style={style.informationTitle}>Email</Text>
            <TextInput
              style={style.Input}
              value={userInfo.email || "Email indisponível"}
              editable={false} 
            />
          </View>
        </View>
      </View>
    </View>
  );
}
