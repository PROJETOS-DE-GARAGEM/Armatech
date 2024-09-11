import axios from "axios";

const API_URL = "http://192.168.1.5:3000";
console.log(API_URL);

export const autenticar = async (email, senha) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${email}&senha=${senha}`,
      { email, senha }
    );
    return response.data;
  } catch (error) {
    throw new Error("Falha na autenticação");
  }
};
