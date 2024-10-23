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
} from "react-native";
// import { autenticarUsuario } from "../../../service/AutenticarUsuario";
import styles from "./LoginStyle";
import * as Animatable from "react-native-animatable";
import UsuarioService from "../../../service/AutenticarUsuario";

const usuarioService = new UsuarioService();
//Componente recebe a propriedade navigation para utilizar suas funcionalidades
export default function Login({ navigation }) {
  //Armazena e atualiza o estado dos dados informado pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      const result = await usuarioService.login(email, senha);

      if (result.success) {
        console.log("Usuário autenticado com sucesso:", result.user);
        navigation.navigate("TelaMenu");
      } else {
        console.log("Falha na autenticação:", result.message);
        Alert.alert("Erro", result.message);
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao tentar fazer login. Tente novamente."
      );
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
            <TextInput
              placeholder="Digite sua senha..."
              style={styles.input}
              value={senha} //Define o valor do TextInput com o estado de
              onChangeText={setSenha} //Atualiza o estado da senha
              secureTextEntry={true} //Ocultar a senha digitada pelo usuário
            />

            <TouchableOpacity
              style={styles.button}
              // Quando o usuário clicar e passar na autenticação irá para a tela Home que não é uma tela comum, essa tela dará acesso as telas principais do projeto
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
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
