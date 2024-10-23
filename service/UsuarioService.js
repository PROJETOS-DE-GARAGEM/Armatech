import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = "http://192.168.18.14:8080/auth"; //Passar a URL da maquina que estiver usando
console.log(API_URL);

class UsuarioService {
  //Função para registrar um novo usuário
  async registrarUsuario(nome, email, senha) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        nome,
        email,
        senha,
      });
      return response;//Retorna os dados da resposta da API
    } catch(error) {
      //Trata erros a requisiçãofalhe
      console.error("Erro ao registrar um usuário:", error);
      throw error;
    }
  }

  //Função para fazer login do usuário e armazenar o token
  async login(email, senha) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        senha,
      });

      const token = response.data.token;
      if(token){
        await AsyncStorage.setItem('item', token); // Armazena o token no dispositivo
      }
      return response.data; //Retorna dos dados (token jwt);
    } catch(error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }

  //Função para obter o token armazenado e usuá-lo em futuras requisições
  async getAuthHeaer(){
    const token = await AsyncStorage.getItem('token');
    return token ? {Authorization: `Bearer ${token}`} : {};
  }
}

export default  UsuarioService;
