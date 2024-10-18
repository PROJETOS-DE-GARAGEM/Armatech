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

   //Função listar Produtos
   async listarProdutos(document) {
    try {
      const response = await axios.get(`${API_URL}${this.resource}`, document);
      console.log(`${API_URL}${this.resource}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  //Função para editar o Produto
  async editarProduto(id, document) {
    try {
      const response = await axios.put(`${API_URL}${this.resource}/${id}`, document); //Pega o dado pelo o ID
      console.log(`${API_URL}${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

   //Função para deletar o Produto
   async deletarProduto(id) {
    try {
      const response = await axios.delete(`${API_URL}${this.resource}/${id}`); //Pega o dado pelo o ID
      console.log(`Produto deletado ${API_URL}${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
