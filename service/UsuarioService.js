// UsuarioService.js

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.10:8080"; // URL base da API

class UsuarioService {
  // Função para registrar um novo usuário
  async registrarUsuario(nome, email, senha) {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        nome,
        email,
        senha,
      });
      return response;
    } catch (error) {
      console.error("Erro ao registrar um usuário:", error);
      throw error;
    }
  }

  // Função para fazer login do usuário e armazenar o token
  async login(email, senha) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        senha,
      });

      const token = response.data.token;
      if (token) {
        await AsyncStorage.setItem("token", token); // Armazena o token no dispositivo
      }
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }

  // Função para obter o token armazenado e usá-lo em futuras requisições
  async getAuthHeader() {
    const token = await AsyncStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // Função para pegar os dados do usuário autenticado
  async pegarDadosUsuario() {
    try {
      const headers = await this.getAuthHeader();
      const response = await axios.get(`${API_URL}/usuario`, { headers });
      return response.data; // Retorna apenas os dados do usuário
    } catch (error) {
      console.error(
        "Erro ao buscar os dados do usuário:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }

  //Função para fazer logout
  async logout(navigation) {
    //Limpa o token ou qualquer dado de sessão
    try {
      await AsyncStorage.removeItem("token");//limpa o token
      console.log("Usuário fez logout com sucesso:");
    //Define a pilha de navegação ou seja o historicode telas visitadas, levando uma nova pilha que contém apenas  uma rota a de login
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }], //Redireciona para a tela de login
      });
    } catch (error) {
      console.log("Erro ao fazer logout", error);
      throw error;
    }
  }
}

export default UsuarioService;
