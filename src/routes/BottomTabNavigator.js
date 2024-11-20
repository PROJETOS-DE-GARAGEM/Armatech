import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";   
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

import Perfil from "../pages/Perfil/Perfil";
import TelaMenu from "../pages/Menu/TelaMenu";
import About from "../pages/Sobre/About";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
      //Confugurações globais do Tab Navigator
        <Tab.Navigator
          screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#007',
          tabBarStyle: {
            borderTopWidth: 0,
          }
        }}
        initialRouteName="Menu" //Iniciando o TabNavigator pela tela Menu
        >
          {/* Opções e rotas que serão acessíveis pelo Tab Navigator */}
        <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Ionicons name="person" size={size} color={color}/>
              }
          }}
          />
        <Tab.Screen
            name="Menu"
            component={TelaMenu}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Ionicons name="home" size={size} color={color}/>
              }
          }}
          />
        <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Entypo name="info-with-circle" size={size} color={color}/>
              }
          }}
          />
        </Tab.Navigator>
    )
  }