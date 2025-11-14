import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//URL principal

const API_URL = "http://192.168.18.14:8080"; // URL base da API

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
      const response = await axios.post(
        `${API_URL}${this.resource}`,
        document,
        {
          //Realiza o cadastro do produto
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token obtido pelo login para autorizar o metodo post no backend
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Retorna os dados do produto cadastrado
    } catch (error) {
      console.error("Erro ao cadastrar o produto:", error);
      throw error; // Lança o erro para ser tratado na camada que chamou
    }
  }

  //Função carregar os Produtos
  async listarProdutos() {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${API_URL}${this.resource}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os produtos:", error);
      throw error;
    }
  }

  //Função para editar o Produto
  async editarProduto(id, document) {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.put(
        `${API_URL}${this.resource}/${id}`,
        document,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`Produto atualizado: ${API_URL}${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
      throw error;
    }
  }

  //Função para deletar o Produto
  async deletarProduto(id) {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.delete(`${API_URL}${this.resource}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(`Produto deletado: ${API_URL}${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir o produto:", error);
      throw error;
    }
  }

  async listarLancamento(dataComeco, dataFim) {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${API_URL}${this.resource}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          dataComeco,
          dataFim,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao listar os lançamentos:", error);
      throw error;
    }
  }
}
