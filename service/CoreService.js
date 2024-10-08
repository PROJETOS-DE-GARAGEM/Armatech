import axios from "axios";
const API_URL = "http://172.20.10.2:3000";
export class CoreService {
  get resource() {
    return;
  }

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
