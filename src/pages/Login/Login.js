import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform, Alert
} from "react-native";
import { autenticar } from "../../../service/AutenticacaoLogin";
import styles from "./LoginStyle";
import * as Animatable from "react-native-animatable";

//Componente recebe a propriedade navigation para utilizar suas funcionalidades
export default function Login({ navigation }) {
  // Armazena e atualiza o estado dos dados infromado pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {

    console.log('E-mail fornecido pelo usuario', email);
    console.log('Senha fornecida pelo usuario', senha);

    const result = await autenticar(email, senha);

    if (result.success) {
      console.log('Usuário autenticado com sucesso:', result.user);
     
      
      // Alert.alert('Sucesso', `Usuário autenticado: ${result.user.email}`);
    } else {
      console.log('Falha na autenticação:', result.message);
      Alert.alert('Erro', result.message);
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
              secureTextEntry={true}//Ocultar a senha digitada pelo usuário
            />
            {/* Exibe mensagem de texto se houver */}
            {/* {errorMessage ? ( 
              <Text style={{ color: "red", marginBottom: 10 }}>
                {errorMessage}
              </Text>
            ) : null} */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
