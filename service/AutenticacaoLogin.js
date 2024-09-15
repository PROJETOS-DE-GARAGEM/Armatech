import axios from "axios";

const API_URL = "http://192.168.1.5:3000/users";//Passar a URL da maquina que estiver usando
console.log(API_URL);

export const autenticar = async (email, senha) => {
  try {
    const response = await axios.get(API_URL);

    console.log('Dados retornados pela API:', response.data);

    const users =  response.data;
    console.log('E-mail fornecido:', email);
    console.log('Senha fornecida:', senha);

    const user = users.find(
      (user) => user.email === email && user.senha === senha);

      if (user) {
        console.log('Usuario autenticado com sucesso', user)
        return { success: true, user };
      } else {
        return { success: false, message: 'E-mail ou senha incorretos.' };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao conectar com o servidor.' };
    }
};




