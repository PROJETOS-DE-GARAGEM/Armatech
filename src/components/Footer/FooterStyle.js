import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Footer: {
    position: "absolute", // Posiciona o footer de forma absoluta
    bottom: 0, // Alinha o footer na parte inferior da tela
    left: 0, // Alinha o footer à esquerda da tela
    right: 0,
    height: "8%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },

  IconContainer:{
    alignItems: "center",
  }, 


});

export default styles;
