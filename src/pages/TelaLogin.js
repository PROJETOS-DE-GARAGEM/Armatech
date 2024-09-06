import React from "react"; //Importando a biblioteca React
import { View, Text, StyleSheet, Image, TextInput } from "react-native"; //Importando os elementos da biblioteca react native

//Componente tela de login
export default function TelaLogin() {
  return (
    //Tag para uma caixa para colocar elementos
    <View style={styles.container}>
      {/* Logo da tela de login */}
      <Image
        source={require("../../assets/images/tela-login.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>ArmaTech</Text>
      <View style={styles.textContainer}>
        <Text style={styles.emailText}>Email</Text>
        
      </View>
    </View>
  );
}

//Style da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    width: "100%",

    // Style da imagel da tela de login
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 50,
    marginBottom: 15,
    alignSelf: "center",
  },

  //Style do titulo da tela de login
  text: {
    fontSize: 45,
    color: "#fafafa",
    fontFamily: "Inter",
    fontWeight: "700",
    lineHeight: 42,
    marginTop: 0,
    alignSelf: "center",
  },

  textContainer: {
    width: "100%",
    paddingHorizontal: 18,
  },

  emailText: {
    textAlign: "left",
    marginRight: 5,
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 50,
  },
});
