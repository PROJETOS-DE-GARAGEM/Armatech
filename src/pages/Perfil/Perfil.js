import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import style from "../Perfil/PerfilStyle";
import Header from "../../components/Header/Header";

export default function Perfil({ navigation }) {
  const userInfo = [
    { name: "User Example", title: "Usuário", value: "username" },
    { name: "User Example", title: "CPF", value: "000.000.000-00" },
    { name: "User Example", title: "Email", value: "example@email.com" },
  ];
  return (
    <View style={style.container}>
      <Header titulo="Perfil" navigation={navigation} />
      <View style={style.ViewProfile}>
        <View style={style.userBox}>
          <FontAwesome name="user-circle-o" size={100} color="#fff" />
          <View>
            <Text style={style.NameUser}>Analu Store</Text>
            <TouchableOpacity style={style.buttonLogout}>
              <Text style={style.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerInformation}>
          {userInfo.map((info, index) => (
            <View key={index}
              style={[style.information,
              index !== userInfo.length - 1 ? style.borderInformation : null]}>

              <Text style={style.informationTitle}>{info.title}</Text>
              <Text style={style.informationText}>{info.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}