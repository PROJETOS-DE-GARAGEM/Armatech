//Style da tela de login
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    width: "100%",
    backgroundColor: "#283949",

    // Style da image da tela de login
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 5,
    marginBottom: 15,
    alignSelf: "center",
  },

  //Style do titulo da tela de login
  tituloLogo: {
    fontSize: 45,
    color: "#fafafa",
    fontFamily: "Inter",
    fontWeight: "700",
    lineHeight: 42,
    marginTop: 0,
    alignSelf: "center",
  },

  //Style do container de texto de login e senha
  textContainer: {
    width: "100%",
    paddingHorizontal: 18,
  },

  //Style do do texto do email
  textLogin: {
    textAlign: "left",
    marginLeft: 7,
    fontSize: 15,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 35,
    marginBottom: 10,
  },

  //Style do input do email e senha
  inputLogin: {
    backgroundColor: "white",
    borderRadius: 9999,
    width: "100%",
    height: 45,
    padding: 10,
    fontFamily: "Roboto",
    lineHeight: 14,
    fontSize: 15,
  },

  //Style do container do botão
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 18,
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 14,
  },

  //Style do botão
  button: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    paddingVertical: 15,
  },

  //Style do texto do botão
  buttonText: {
    color: "#e87225",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 19,
    fontWeight: "700",
  },

  //Style do link da recuperação de senha
  RecuperacaoSenhaText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
});

export default styles;
