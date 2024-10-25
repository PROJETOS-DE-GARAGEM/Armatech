import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "../Perfil/PerfilStyle";
import Header from "../../components/Header/Header";
import UsuarioService from "../../../service/UsuarioService";

export default function Perfil({ navigation }) {
  const [userInfo, setUserInfo] = useState(null); // Inicializa como null
  const [loading, setLoading] = useState(true);   // Estado de carregamento

  const usuarioService = new UsuarioService();

  // Função para carregar os dados do usuário
  const carregarDadosUsuario = async () => {
    try {
      const dadosUsuario = await usuarioService.pegarDadosUsuario(); // Chama a API
      setUserInfo(dadosUsuario); // Atualiza o estado com os dados do usuário
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
            <Text style={style.NameUser}>{userInfo.nome || "Nome indisponível"}</Text>
            {/* Exibe o nome do usuário ou uma mensagem alternativa */}
            <TouchableOpacity style={style.buttonLogout}>
              <Text style={style.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerInformation}>
          <View>
            <Text style={style.informationTitle}>Nome: {userInfo.nome || "Nome indisponível"}</Text>
            <Text style={style.informationTitle}>Email: {userInfo.email || "Email indisponível"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
