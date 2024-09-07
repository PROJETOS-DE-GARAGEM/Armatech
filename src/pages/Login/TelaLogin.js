import React from "react"; 
import styles from './TelaLoginStyle';//Importando a biblioteca React
import {
  View,
  Text,
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
           source={require("../../../assets/images/tela-login.png")}
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

