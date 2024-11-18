import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import UsuarioService from "../../../service/UsuarioService";

const usuarioService = new UsuarioService();

const ResetPassword = ({ route, navigation }) => {
  const [token, setToken] = useState(""); // Estado para o token
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Captura o token enviado pela rota (se existir)
    if (route.params?.token) {
      setToken(route.params.token);
    } else {
      Alert.alert(
        "Erro",
        "Token de redefinição não encontrado. Por favor, tente novamente."
      );
      navigation.navigate("Login"); // Redireciona para o login se o token estiver ausente
    }
  }, [route.params]);

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }

    setLoading(true);
    try {
      // Envia o token e a nova senha para o backend
      await usuarioService.resetPassword(token, newPassword); 
      Alert.alert("Sucesso", "Senha redefinida com sucesso.");
      navigation.navigate("Login"); // Redireciona para a tela de login
    } catch (error) {
      Alert.alert(
        "Erro",
        error.response?.data || "Não foi possível redefinir a senha."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a nova senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Processando..." : "Redefinir Senha"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;