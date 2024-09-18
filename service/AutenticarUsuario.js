// import axios from "axios";

// const API_URL = "http://172.20.10.2:3000/users"; //Passar a URL da maquina que estiver usando
// console.log(API_URL);

// export const autenticarUsuario = async (email, senha) => {
//   try {
//     const response = await axios.post(API_URL, email, senha);

//     console.log("Dados retornados pela API:", response.data);

//     const users = response.data;


//     if (user) {
//       console.log("Usuario autenticado com sucesso", user);
//       return { success: true, user };
//     } else {
//       return { success: false, message: "E-mail ou senha incorretos." };
//     }
//   } catch (error) {
//     return { success: false, message: "Erro ao conectar com o servidor." };
//   }
// };
