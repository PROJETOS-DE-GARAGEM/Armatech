import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Componente do React Navigation que gerencia o estado de navegação de envolve todas as telas
import { createStackNavigator } from "@react-navigation/stack"; // É uma função do React Navigatio para criar um navegador, é onde vai ficar todas as telas
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login"
import TelaMenu from "../pages/Menu/TelaMenu"; //Tela de Menu

//Passando a função para uma constante para utilizar as suas funcionalidades
const stack = createStackNavigator();

export default function Routes() {
  return (
    // Onde ficas todas as telas e gerência o estado de nevegação
    <NavigationContainer>
      {/* Este compo utiliza o metodo navigation para definir a navegação e envolver as telas */}
      <stack.Navigator>
        {/* Para definir uma tela especifica, cada screen representa uma rota */}
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} //Para nao exibir o nome da tela Menu
        />
        <stack.Screen
          name="Tela Menu"
          component={TelaMenu}
          options={{ headerShown: false }} //Para nao exibir o nome da tela Menu
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
