import axios from "axios";

const API_URL = "http://192.168.18.14:3000";
console.log(API_URL);

export const autenticar = async (email, senha) => {
  try {
    // Passa os parâmetros usando a opção `params`
    const response = await axios.get(`${API_URL}/users`, {
      params: { email, senha },
    });
    
    // Verifica a estrutura da resposta
    console.log("Resposta da API:", response.data);
    
    if (response.data.length > 0) {
      return response.data[0]; // Retorna o primeiro usuário encontrado
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro de autenticação:", error);
    throw new Error("Falha na autenticação");
  }
};

