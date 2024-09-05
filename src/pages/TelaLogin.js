import React from "react";//Importando a biblioteca React
import { View, Text, StyleSheet } from "react-native";//Importando a biblioteca React

//
export default function TelaLogin(){
    return(
        //Tag para uma caixa para colocar elementos
        <View style={styles.container}>
            {/* Tag para adicionar text */}
            <Text>
            Tela de login
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1, // Garante que o container preencha toda a tela
      backgroundColor: 'orange', // Define a cor de fundo
      alignItems: 'center',
    justifyContent: 'center',
    },
  });
  