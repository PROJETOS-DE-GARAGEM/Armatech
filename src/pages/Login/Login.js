import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
// import { autenticarUsuario } from "../../../service/AutenticarUsuario";
import styles from "./LoginStyle";
import * as Animatable from "react-native-animatable";
import UsuarioService from "../../../service/UsuarioService";
import { Ionicons } from "@expo/vector-icons"; // Ícones do Expo

const usuarioService = new UsuarioService();
//Componente recebe a propriedade navigation para utilizar suas funcionalidades
export default function Login({ navigation }) {
  //Armazena e atualiza o estado dos dados informado pelo usuário
  const [email, setEmail] = useState("test3@gmail.com");
  const [senha, setSenha] = useState("1234");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Ativa o carregamento
    setLoading(true);
    try {
      const result = await usuarioService.login(email, senha);

      if (result.token) {
        //Verifica se recebeu o token
        console.log("Usuário autenticado com sucesso:");
        navigation.navigate("Home", { screen: "TelaMenu" });
      } else {
        Alert.alert("Erro", "Falha na autenticação. ");
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      Alert.alert(
        "Erro",
        "Usuário não encontrado, verifique  as suas crendenciais"
      );
    } finally {
      // Finaliza o carregamento
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
          >
            <Text style={styles.message}>Bem-vindo(a)</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="Digite seu email..."
              style={styles.input}
              value={email} //Define o valor do TextImput com o estado do email
              onChangeText={setEmail} //Atualiza o estado de email
              keyboardType="email-address" //Define o teclado para o email
              autoCapitalize="none" //Evita a capitalização automática no início
            />
            <Text style={styles.title}>Senha</Text>
            <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!senhaVisivel} // Alterna visibilidade da senha
        />
        <TouchableOpacity
          onPress={() => setSenhaVisivel(!senhaVisivel)}
          // style={styles.eyeIcon}
        >
          <Ionicons
          style={styles.eyeIcon}
            name={senhaVisivel ? "eye" : "eye-off"} // Ícone alternado
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

            {/* Exibe o indicador de carregamento enquanto `loading` for verdadeiro */}
            {loading ? (
              <ActivityIndicator size="large" color="#007BFF" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate("CadastroConta")}
              style={styles.buttonRegister}
            >
              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
