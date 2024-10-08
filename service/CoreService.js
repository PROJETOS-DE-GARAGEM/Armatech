import axios from "axios";

//URL principal 
const API_URL = "http://192.168.18.14:3000";

//Classe para realizar requisições pegando os dados a partir da URL principal
export class CoreService {
  //Define o endpoint especifico 
  get resource() {
    return;
  }

  //Função de cadastro de Produtos
  async cadastrar(document) {
    try {
      const response = await axios.post(`${API_URL}${this.resource}`, document);
      console.log(`${API_URL}${this.resource}`);
      return response.data; //Retorna os dados do produto cadastrado
    } catch (error) {
      throw error; //Lança o erro para ser tratado na camada que chamou
    }
  }
}
