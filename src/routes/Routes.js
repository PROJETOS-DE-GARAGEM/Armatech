import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Componente do React Navigation que gerencia o estado de navegação de envolve todas as telas
import { createStackNavigator } from "@react-navigation/stack"; // É uma função do React Navigatio para criar um navegador, é onde vai ficar todas as telas
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import TelaMenu from "../pages/Menu/TelaMenu";
import RegistroDeProdutos from "../pages/RegistroDeProdutos/RegistroDeProdutos";
import GerenciamentoDeEstoque from "../pages/GerencimentoDeEstoque/GerenciamentoDeEstoque";
import CadastroConta from "../pages/CadastroConta/CadastroConta";
import ProcessoDeVendas from "../pages/ProcessamentoDeCompras/ProcessoDeCompras";
import RelatorioEAnalises from "../pages/RelatoriosEAnalises/RelatorioEAnalises";
import ControleDeFornecedores from "../pages/ControleDeFornecedores/ControleDeForncedores";


//Passando a função para uma constante para utilizar as suas funcionalidades
const stack = createStackNavigator();
const drawer = createDrawerNavigator();

//Definindo as rotas do Drawer em um array para mapear
const drawerScreens = [
  { name: "Tela Menu", component: TelaMenu },
  { name: "Cadastro De Produtos", component: RegistroDeProdutos },
  { name: "Gerenciamento De Estoque", component: GerenciamentoDeEstoque },
  { name: "Processamento De Vendas", component: ProcessoDeVendas },
  { name: "Relatórios e Analises", component: RelatorioEAnalises },
  { name: "Controle de Forncedores", component: ControleDeFornecedores },

];

function DrawerNavigation() {
  return (
    <drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} 
    />} // Usa o conteúdo customizado
    screenOptions={{
      // Estilizando a fonte, cores etc.
      drawerLabelStyle: {
        fontSize: 15, // Aumenta o tamanho da fonte
        fontWeight: 'bold', // Negrito no texto
        color: '#333', // Cor do texto
      },
      drawerStyle: {
        backgroundColor: '#e6e6e6', // Cor de fundo do Drawer
      },
      drawerActiveTintColor: '#007', // Cor da rota ativa
      drawerInactiveTintColor: '#333',
  // Aqui não queremos o ícone padrão
      // Cor das rotas inativas
    }}
    initialRouteName="TelaMenu">
      {/* Utilizando map para renderizar dinamicamente as telas */}
      {drawerScreens.map((screen, index) => (
        <drawer.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false}}
        />
      ))}
      {/* Adicione outras telas conforme necessário */}
    </drawer.Navigator>
  );
}

// Rotas Principais
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
