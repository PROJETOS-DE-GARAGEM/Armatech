import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileSvg from "../../../assets/svg/ProfileSvg";
import styles from "./UsuariosEPermissoesStyle";


export default function UsuariosEPermissoes() {
    const [user, setUser] = useState ([
      {id: 1, nome: 'Ana Lúcia', conta: 'Administrador'},
      {id: 2, nome: 'Adécio Farias', conta: 'Administrador'},
      {id: 3, nome: 'Jonas Rodrigues', conta: 'Funcionário'},


    ]);

  return (
    <View style={styles.container}>
      <Header titulo="Usuários e Permissões"/>
      <View style={styles.ViewCenter}>
        <Text style={styles.Title}>Lista de Usuários</Text>

        <View>
          <FlatList
          data={user}
          renderItem={({item}) => <Profile data={item} />}
          >
          </FlatList>
        </View>

      </View>
      <Footer/>
    </View>
  );
}

function Profile(props){
  return (

    <View style={styles.areaPerfil}>
        <View style={styles.ViewNameProfile} >
      <ProfileSvg/>
        <View>
        <Text style={styles.userTitle}>{props.data.nome}</Text>
        <Text style={styles.userConta}>{props.data.conta}</Text>
        </View>
        </View>
      <TouchableOpacity style={styles.buttonProfile}>
        <Text style={styles.textButtonProfile}>Editar</Text>
      </TouchableOpacity>
    </View>
  )
}