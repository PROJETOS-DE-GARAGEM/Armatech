import React from "react"; //Importando a biblioteca React
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"; //Importando os elementos da biblioteca react native

//Componente tela de login
export default function TelaLogin({navigation}) {//Objeto fornecido pelo React Navigation que contém métodos para gerenciar a nevegação. Ele funciona como uma propriedade no componente.
  return (
    //Container Principal
    <View style={styles.container}>
      {/* Container da logo */}
      <View>
        <Image
          source={require("../../assets/images/tela-login.png")}
          style={styles.logo}
        />
        <Text style={styles.tituloLogo}>ArmaTech</Text>
      </View>
      {/* Text Container */}
      <View style={styles.textContainer}>
        <Text style={styles.textLogin}>Email</Text>
        <TextInput style={styles.inputLogin} />
        <Text style={styles.textLogin}>Senha</Text>
        <TextInput style={styles.inputLogin} />
      </View>
      {/* Container do botão */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tela Menu")}//Método para navegar para uma tela específica. OnPress é o evento que aciona a nevegação quando o usuário interage com um componente.
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.RecuperacaoSenhaText}>Esqueceu a sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Style da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    width: "100%",
    backgroundColor: "#283949",

    // Style da image da tela de login
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "center",
  },

  //Style do titulo da tela de login
  tituloLogo: {
    fontSize: 45,
    color: "#fafafa",
    fontFamily: "Inter",
    fontWeight: "700",
    lineHeight: 42,
    marginTop: 0,
    alignSelf: "center",
  },

  //Style do container de texto de login e senha
  textContainer: {
    width: "100%",
    paddingHorizontal: 18,
  },

  //Style do do texto do email
  textLogin: {
    textAlign: "left",
    marginLeft: 7,
    fontSize: 15,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 35,
    marginBottom: 10,
  },

  //Style do input do email e senha
  inputLogin: {
    backgroundColor: "white",
    borderRadius: 9999,
    width: "100%",
    height: 45,
    padding: 10,
    fontFamily: "Roboto",
    lineHeight: 14,
    fontSize: 15,
  },

  //Style do container do botão
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 18,
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 50,
  },

  //Style do botão
  button: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    paddingVertical: 15,
  },

  //Style do texto do botão
  buttonText: {
    color: "#e87225",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
  },

  //Style do link da recuperação de senha
  RecuperacaoSenhaText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
});
