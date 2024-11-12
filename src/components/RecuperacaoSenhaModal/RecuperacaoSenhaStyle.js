import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    
  },
  closeButtonText: {
    fontSize: 20,      // Aumenta o tamanho do "X"
    fontWeight: "bold",
    color: "gray"
  },

  subContainer: {
    width: 357,
    height: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
   
  },

  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#283949",
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: "bold",
    color: "#283949",
    marginBottom: 5,
  },

  input: {
    borderBottomWidth: 0, // Remove a borda
    height: 40,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#e0e0e0", // Fundo claro
    paddingHorizontal: 10, // Adiciona um espaçamento interno (opcional)
    borderRadius: 5, // Arredonda as bordas (opcional)
    marginBottom: 20
  },

  botao: {
    backgroundColor: "#283949",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    color: '#fff'
  },

  botaoText:{
    color: '#fff',
    fontWeight: "bold",
    fontSize: 15,
    textAlign: 'center'

  }
});

export default style;
