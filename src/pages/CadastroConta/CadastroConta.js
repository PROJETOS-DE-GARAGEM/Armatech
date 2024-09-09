import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./CadastroContaStyle";
import * as Animatable from "react-native-animatable";

export default function CadastroConta() {
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
           style={styles.titleContainer}>
            <Text style={styles.title}>Cadastrar Conta</Text>
          </Animatable.View>
          {/* Container do Formulario */}
          <View style={styles.containerForm}>
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput style={styles.input} placeholder=" Nome"></TextInput>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} placeholder="Senha"></TextInput>
            {/* Botão */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
