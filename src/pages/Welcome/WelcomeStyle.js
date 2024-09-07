//Style da tela de login
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container preencha toda a tela
    backgroundColor: "#283949",
  },

  //Style do container da logo
  containerLogo: {
    flex: 2,
    backgroundColor: "#283949",
    justifyContent: "center",
    alignItems: "center",
  },
  //Style da image(logo)
  logo: {
    width: 300,
    height: 300,
    marginTop: 5,
    marginBottom: 15,
    alignSelf: "center",
  },

  //Style do botão de acesso para o formulario
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  //Style do titulo da tela de login
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  //Style do texto
  text: {
    color: "#a1a1a1",
  },

  //Style do botão
  button: {
    position: "absolute",
    backgroundColor: "#283949",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  // Style do texto do botão
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
