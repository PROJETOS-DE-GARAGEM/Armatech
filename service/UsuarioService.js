// UsuarioService.js

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.18.14:8080"; // URL base da API

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
      
      console.log("Dados recebidos do backend:", response.data); // Verifica o conteúdo da resposta
      return response.data; // Retorna apenas os dados do usuário
    } catch (error) {
      console.error(
        "Erro ao buscar os dados do usuário:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }
}

//   // Função de teste para chamar pegarDadosUsuario diretamente
//   async testarPegarDadosUsuario() {
//     try {
//       const dadosUsuario = await this.pegarDadosUsuario();
//       console.log("Resultado da função pegarDadosUsuario:", dadosUsuario);
//     } catch (error) {
//       console.error("Erro ao testar pegarDadosUsuario:", error);
//     }
//   }
// }

// const usuarioService = new UsuarioService();
export default UsuarioService;


// // Teste a função (remova essa chamada após o teste)
// usuarioService.testarPegarDadosUsuario();
