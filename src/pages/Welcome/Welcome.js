import React from "react";
import styles from "./WelcomeStyle"; //Importando a biblioteca React
import { View, Text, Image, TouchableOpacity } from "react-native"; //Importando os elementos da biblioteca react native
import * as Animatable from "react-native-animatable";// Animações do react-native
//Componente tela de login
export default function TelaLogin({ navigation }) {
  //Objeto fornecido pelo React Navigation que contém métodos para gerenciar a nevegação. Ele funciona como uma propriedade no componente.
  return (
    //Container Principal
    <View style={styles.container}>
      {/* Container da logo */}
      <View style={styles.containerLogo}>
        {/* Container da Image */}
        <Animatable.Image
          animation="lightSpeedIn"
          source={require("../../../assets/images/tela-login.png")}
          style={styles.logo}
          useNativeDriver={true}
        />
      </View>
      {/* Container do titulo  */}
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Gerencie seu estoque e suas compras de forma simples e eficiente!
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")} //Método para navegar para uma tela específica. OnPress é o evento que aciona a nevegação quando o usuário interage com um componente.
          style={styles.button}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
