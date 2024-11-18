import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

import style from "./RecuperacaoSenhaStyle";
import UsuarioService from "../../../service/UsuarioService";

const usuarioService = new UsuarioService();

const ModalForgotPassword = ({ modalVisible, setModalVisible }) => {
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  const enviar = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para validar e-mail

    if (!email || !emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true); // Ativa o indicador de carregamento
    try {
      await usuarioService.recoveryPassword(email); //Chama a funcao no usuarioService
      Alert.alert("Link de recuperação enviado para o e-mail.");
      setEmail(""); // Limpa o campo de e-mail
      setModalVisible(false);
    } catch (error) {
      Alert.alert(
        error.response?.data || "Erro ao enviar o e-mail de recuperação"
      );
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  return (
    <Modal visible={modalVisible} animationType="Slide" transparent={true}>
      <View style={style.container}>
        <View style={style.subContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={style.closeButton}
          >
            <Text style={style.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={style.message}>Recuperar Senha</Text>
          <Text>
            Por favor entre com o seu email. Você receberá um link para criar
            uma nova senha via email.
          </Text>
          <Text style={style.title}>Email</Text>
          <TextInput
            style={style.input}
            placeholder="Digite o seu e-mail..."
            value={email} // Define o valor do TextInput com o estado
            onChangeText={setEmail} // Atualiza o estado conforme o usuário digita
            keyboardType="email-address" // Define o teclado adequado para e-mail
            autoCapitalize="none" // Evita capitalização automática
          ></TextInput>

          {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <TouchableOpacity style={style.botao} onPress={enviar}>
              <Text style={style.botaoText}>Enviar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalForgotPassword;
