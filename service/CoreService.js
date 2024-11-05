import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//URL principal
const API_URL = "http://:8080"; // URL base da API


//Classe para realizar requisições pegando os dados a partir da URL principal
export class CoreService {
  //Define o endpoint especifico
  get resource() {
    return;
  }

  //Função de cadastro de Produtos
  async cadastrar(document) {
    try {
      const token = await AsyncStorage.getItem("token"); // Recupera o token do armazenamento
      const response = await axios.post(`${API_URL}${this.resource}`, document, { //Realiza o cadastro do produto
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token obtido pelo login para autorizar o metodo post no backend
          'Content-Type': 'application/json',
        },
      });
      return response.data; // Retorna os dados do produto cadastrado
    } catch (error) {
      console.error("Erro ao cadastrar o produto:", error);
      throw error; // Lança o erro para ser tratado na camada que chamou
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
