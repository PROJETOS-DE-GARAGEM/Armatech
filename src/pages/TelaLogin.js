import React from "react"; //Importando a biblioteca React
import { View, Text, StyleSheet, Image } from "react-native"; //Importando os elementos da biblioteca react native 


//Componente tela de login
export default function TelaLogin() {
  return (
    //Tag para uma caixa para colocar elementos
    <View style={styles.container}>
        {/* Logo da tela de login */}
      <Image 
      source={require('../../assets/images/tela-login.png')} 
      style={styles.logo}
      />
      {/* Tag para adicionar text */}
      <Text style={styles.text}>ArmaTech</Text>
    </View>
  );
}

//Style da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    alignItems: "center",
 
    // Style da imagel da tela de login
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 50,
    marginBottom: 15,

  },

  //Style do titulo da tela de login
  text: {
    fontSize: 45,
    color: '#fafafa',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 42,
    marginTop: 0,
  }
});
