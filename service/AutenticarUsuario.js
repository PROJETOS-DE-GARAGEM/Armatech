import axios from "axios";

const API_URL = "http://192.168.1.8:8080/auth"; //Passar a URL da maquina que estiver usando
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
      return response.data; //Retorna os dados da resposta da API
    } catch(error) {
      //Trata erros a requisiçãofalhe
      console.error("Erro ao registrar um usuário:", error);
      throw error;
    }
  }

  //Função para fazer login do usuário
  async login(email, senha) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        senha,
      });
      return response.data; //Retorna dos dados (token jwt);
    } catch(error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }
}

export default  UsuarioService;
