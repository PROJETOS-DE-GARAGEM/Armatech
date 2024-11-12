import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },

  //Style do container do header
  containerHeader: {
    marginTop: "18%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  //Style da Mensagem
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },

  //Style do formulario do login
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  //Style do login e senha
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  //Style do input do login e senha
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  //Style do botão do formulario
  button: {
    backgroundColor: "#283949",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  //Style do texto do botão
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  //Style do botão para fazer o cadastro
  buttonRegister: {
    marginTop: 10,
    alignSelf: "center",
  },

  buttonForgotPassword: {
    alignSelf: "center",
  },

  //Style do texto do botão
  registerText: {
    color: "#a1a1a1",
  },
});

export default styles;
