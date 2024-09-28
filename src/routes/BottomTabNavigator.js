import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";   
import { Ionicons } from '@expo/vector-icons';

import Perfil from "../pages/Perfil/Perfil";
import TelaMenu from "../pages/Menu/TelaMenu";
import Ajustes from "../pages/Ajustes/Ajustes";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator
          screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#283949',
          tabBarStyle: {
            borderTopWidth: 0,
          }
        }}
        initialRouteName="Menu"
        >
        <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Ionicons name="person" size={size}/>
              }
          }}
          />
        <Tab.Screen
            name="Menu"
            component={TelaMenu}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Ionicons name="home" size={size}/>
              }
          }}
          />
        <Tab.Screen
            name="Ajustes"
            component={Ajustes}
            options={{
              tabBarIcon: ({ color, size}) => {
                return <Ionicons name="settings" size={size}/>
              }
          }}
          />
        </Tab.Navigator>
    )
  }