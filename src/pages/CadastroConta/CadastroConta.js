import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator
} from "react-native";
import styles from "./CadastroContaStyle";
import * as Animatable from "react-native-animatable";
import UsuarioService from "../../../service/UsuarioService";

const usuarioService = new UsuarioService();

export default function CadastroConta({ navigation }) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [loading, setLoading] = useState(false); 

  // Função de validação de email com o regex
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  //Função que será chamada ao submeter o cadastro
  const handledCadastro = async () => {
    //Verifica se o campos foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    //Verifica se o email é válido
    if (!validarEmail(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido");
      return;
    }

    //Verifica se as senha são iguais
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não são iguais");
      return;
    }

        // Ativa o carregamento
        setLoading(true);

    try {
      //Chama o serviço para registrar o usuário
      const result = await usuarioService.registrarUsuario(nome, email, senha);
      if (result.status === 200 || result.status === 201) {
        console.log("Usuário cadastrado com sucesso!");
         // Limpa os campos após o cadastro bem-sucedido
         setNome("");
         setEmail("");
         setSenha("");
         setConfirmarSenha("");
 
         // Navega para a tela de login
         navigation.navigate("Login");
      }
    } catch (error) {
      //Verifica se o erro vem de um email já existente
      if (error.response && error.response.status === 400) {
        Alert.alert("Erro", "Email já cadastrado.");
      } else {
        //Trata outros erros de forma genérica
        console.error("Erro ao registrar o usuário", error);
        Alert.alert("Erro", " Ocorreu um eero ao tentar realizar o cadastro.");
      }
    } finally {
      //Finaliza o carregamento
      setLoading(false);
    }
  };

  return (
    //Para garantir que a tela seja rolável e que o contúdo seja ajustado corretamente quando o teclado é exibido
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      //Platforma: Ajusta o comportamento para IOS e Andorid, pois O ios geralemnte se comporta diferente
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Permite que a tela role para que todos os elementos fique acessível  */}
      <ScrollView
        //Garante que a tela role quando o conteúdo for maior
        contentContainerStyle={{ flexGrow: 1 }}
        //Permite interagir com os campos de texto sem o teclado fecha automaticamente
        keyboardShouldPersistTaps="handled"
      >
        {/* Conatiner Principal */}
        <View style={styles.container}>
          {/* Container do Titulo */}
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.titleContainer}
          >
            <Text style={styles.title}>Cadastrar Conta</Text>
          </Animatable.View>
          {/* Container do Formulario */}
          <View style={styles.containerForm}>
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder=" Nome"
              value={nome}
              onChangeText={setNome}
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.text}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
            <Text style={styles.text}>Confirmar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confrimar senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry={true}
            />
             {/* Exibe o indicador de carregamento se `loading` for verdadeiro */}
             {loading ? (
              <ActivityIndicator size="large" color="#007BFF" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handledCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
