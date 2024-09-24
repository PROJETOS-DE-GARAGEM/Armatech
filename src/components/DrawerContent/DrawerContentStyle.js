import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      alignItems: "center",
      paddingVertical: 20,
      backgroundColor: "#283949", // Cor de fundo do cabeçalho
    },
    logo: {
      width: 80,
      height: 80,
      marginBottom: 10,
    },
    welcomeText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    userContainer: {
      backgroundColor: "#007bff", // Cor de fundo do nome do usuário
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 15,
      marginTop: 10,
    },
    userName: {
      color: "#fff",
      fontSize: 16,
    },
  });
  

  export default styles;