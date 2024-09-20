import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Componente do React Navigation que gerencia o estado de navegação de envolve todas as telas
import { createStackNavigator } from "@react-navigation/stack"; // É uma função do React Navigatio para criar um navegador, é onde vai ficar todas as telas
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import TelaMenu from "../pages/Menu/TelaMenu";
import RegistroDeProdutos from "../pages/RegistroDeProdutos/RegistroDeProdutos";
import GerenciamentoDeEstoque from "../pages/GerencimentoDeEstoque/GerenciamentoDeEstoque";
import CadastroConta from "../pages/CadastroConta/CadastroConta";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

//Passando a função para uma constante para utilizar as suas funcionalidades
const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />} // Usa o conteúdo customizado

    initialRouteName="TelaMenu">
      <Drawer.Screen
        //Desabilita o drawer padrão do react drawer
        options={{ headerShown: false }}
        name="Tela Menu"
        component={TelaMenu}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="RegistroDeProdutos"
        component={RegistroDeProdutos}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="GerenciamentoDeEstoque"
        component={GerenciamentoDeEstoque}
      />
      {/* Adicione outras telas conforme necessário */}
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    // Onde ficas todas as telas e gerência o estado de nevegação
    <NavigationContainer>
      {/* Este compo utiliza o metodo navigation para definir a navegação e envolver as telas */}
      <stack.Navigator>
        {/* Para definir uma tela especifica, cada screen representa uma rota */}
        {/* Telas Principais */}
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="CadastroConta"
          component={CadastroConta}
          options={{ headerShown: false }}
        />

        {/*Tela que dá acesso as telas principais  */}
        <stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{
            headerShown: false,
            gestureEnabled: false, // Desativa o gesto de voltar
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
