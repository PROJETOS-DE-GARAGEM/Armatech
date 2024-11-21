import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    height: "8%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute", // Faz o ícone ficar à esquerda
    left: 20, // Ajuste conforme necessário para distanciar do início
  },
});

export default styles;
