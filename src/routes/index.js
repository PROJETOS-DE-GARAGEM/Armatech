import React from "react"; // Componente do React Navigation que gerencia o estado de navegação de envolve todas as telas
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons'; // É uma função do React Navigatio para criar um navegador, é onde vai ficar todas as telas
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import CadastroConta from "../pages/CadastroConta/CadastroConta";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import TelaMenu from "../pages/Menu/TelaMenu";
import RegistroDeProdutos from "../pages/RegistroDeProdutos/RegistroDeProdutos";
import GerenciamentoDeEstoque from "../pages/GerencimentoDeEstoque/GerenciamentoDeEstoque";
import ProcessamentoDeVendas from "../pages/ProcessamentoDeCompras/ProcessamentoDeCompras";
import RelatoriosEAnalises from "../pages/RelatoriosEAnalises/RelatoriosEAnalises";
import ControleDeFornecedores from "../pages/ControleDeFornecedores/ControleDeForncedores";
import IntegracaoDeVendas from "../pages/IntegracaoDeVendas/IntegracaoDeVendas";
import UsuariosEPermissoes from "../pages/UsuariosEPermissoes/UsuariosEPermissoes";
import ProcessamentoDeCompras from "../pages/ProcessamentoDeCompras/ProcessamentoDeCompras";
import BottomTabNavigator from './BottomTabNavigator';


//Passando a função para uma constante para utilizar as suas funcionalidades
const Stack = createStackNavigator();
const drawer = createDrawerNavigator();


const drawerScreens = [
  { name: "TelaMenu", 
    component: TelaMenu, 
    label: "Menu", 
    icon: "home" 
  },
  {
    name: "RegistroDeProdutos",
    component: RegistroDeProdutos,
    label: "Produtos",
    icon: "pricetag",
  },
  {
    name: "GerenciamentoDeEstoque",
    component: GerenciamentoDeEstoque,
    label: "Estoque",
    icon: "cube",
  },
  {
    name: "ProcessamentoDeCompras",
    component: ProcessamentoDeCompras,
    label: "Compras",
    icon: "cart",
  },
  {
    name: "RelatoriosEAnalises",
    component: RelatoriosEAnalises,
    label: "Relatórios",
    icon: "stats-chart",
  },
  {
    name: "ControleDeFornecedores",
    component: ControleDeFornecedores,
    label: "Fornecedores",
    icon: "people",
  },
  {
    name: "IntegracaoDeVendas",
    component: IntegracaoDeVendas,
    label: "Vendas",
    icon: "cash",
  },
  {
    name: "UsuariosEPermissoes",
    component: UsuariosEPermissoes,
    label: "Usuários",
    icon: "person",
  },
];

function DrawerNavigation() {
  return (
    <drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />} // Usa o conteúdo customizado
      screenOptions={{
        // Estilizando a fonte, cores etc.
        drawerLabelStyle: {
          fontSize: 15, // Aumenta o tamanho da fonte
          fontWeight: "bold", // Negrito no texto
          color: "#333", // Cor do texto
        },
        drawerStyle: {
          backgroundColor: "#e6e6e6", // Cor de fundo do Drawer
        },
        drawerActiveTintColor: "#007", // Cor da rota ativa
        drawerInactiveTintColor: "#333",
        // Aqui não queremos o ícone padrão
        // Cor das rotas inativas
      }}
      initialRouteName="TelaMenu"
    >
      {/* Utilizando map para renderizar dinamicamente as telas */}
      {drawerScreens.map((screen, index) => (
        <drawer.Screen
          key={index}
          name={screen.name}
          component={screen.name === "TelaMenu" ? BottomTabNavigator : screen.component}
          options={{
            headerShown: false,
            drawerLabel: screen.label,
            drawerIcon: ({ color, size }) => (
              <Ionicons name={screen.icon} size={size} color={color} />
            ), // Abreviação para a barra lateral
          }}
        />
      ))}
      {/* Adicione outras telas conforme necessário */}
    </drawer.Navigator>
  );
}
// Rotas Principais
export default function Routes() {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CadastroConta"
          component={CadastroConta}
          options={{ headerShown: false }}
        />

        {/*Tela que dá acesso as telas principais  */}
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{
            headerShown: false,
            gestureEnabled: false, // Desativa o gesto de voltar
          }}
        />
      </Stack.Navigator>
  );
}
