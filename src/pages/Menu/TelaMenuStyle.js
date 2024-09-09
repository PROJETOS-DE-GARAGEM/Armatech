import { Dimensions, StyleSheet } from "react-native";

const { width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },

  card: {
    alignItems: "center", 
    justifyContent: "center", 
    width: width * 0.42, // Ajusta a largura com base na tela
    height: width * 0.35,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  MenuText: {
    textAlign: 'center',
    fontSize: 16
,    marginTop: 5,                 
    fontWeight: 'bold',
  }
});

export default styles;
