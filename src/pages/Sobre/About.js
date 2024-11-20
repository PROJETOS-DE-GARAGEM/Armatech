import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

import * as Animatable from 'react-native-animatable';
import style from "./AboutStyle";
import Header from "../../components/Header/Header";

export default function About({ navigation }) {
  const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

  return (
    <View style={style.container}>
      <Header titulo="About" navigation={navigation} />
      <View>
        <Image
          source={require("../../../assets/images/tela-login.png")}
          style={style.logo}
        />
      </View>
      <View style={style.boxText}>
        <Text style={style.text}>
          Bem-vindo ao ArmaTech, um gerenciador de estoque prático e eficiente,
          desenvolvido com dedicação por cinco estudantes tecnologia. Nosso
          objetivo é simplificar o controle de estoque, ajudando o lojista a
          organizar seus produtos de forma inteligente, com ferramentas modernas
          e fáceis de usar.
        </Text>

        <Text style={style.text}>
          Criado para atender às necessidades de pequenas e médias lojas, o app
          combina funcionalidade e design intuitivo, permitindo cadastrar,
          atualizar, filtrar e gerenciar seus itens com rapidez. Aqui, seu
          estoque está sempre ao alcance das suas mãos!
        </Text>

        <Text style={style.text}>
          Obrigado por confiar no nosso trabalho. Esperamos que o ArmaTech
          facilite sua jornada e seja uma ferramenta indispensável para o
          sucesso do seu negócio!
        </Text>
        <View style={style.boxIcons}>
          <MaterialIcons name="security-update-good" size={50} color="#fff" />
          <FontAwesome5 name="box-open" size={50} color="#fff" />
          <FontAwesome5 name="sync-alt" size={50} color="#fff" />
          <Ionicons name="bar-chart-sharp" size={50} color="#fff" />
        </View>

          <Text style={style.textLinking}>
            Quer conhecer o código por trás deste projeto? Confira o
            repositório no GitHub:
          </Text>
          <ButtonAnimated
            animation= "pulse"
            iterationCount={Infinity}
            onPress={
              () => {Linking.openURL('https://github.com/PROJETOS-DE-GARAGEM')}
            }
          >
          <AntDesign name="github" size={50} color="#fff" />
          </ButtonAnimated>
      </View>
    </View>
  );
}
