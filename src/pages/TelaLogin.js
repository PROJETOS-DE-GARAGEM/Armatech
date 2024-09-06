import React from "react"; //Importando a biblioteca React
import { View, Text, StyleSheet, Image } from "react-native"; //Importando a biblioteca React

//
export default function TelaLogin() {
  return (
    //Tag para uma caixa para colocar elementos
    <View style={styles.container}>
      <Image 
      source={require('../../assets/images/tela-login.png')} 
      style={styles.logo}
      />
      {/* Tag para adicionar text */}
      <Text style={styles.text}>ArmaTech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    alignItems: "center",
 
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 50,
    marginBottom: 15,

  },

  text: {
    fontSize: 45,
    color: '#fafafa',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 42,
    marginTop: 0,
  
    
  }
});
