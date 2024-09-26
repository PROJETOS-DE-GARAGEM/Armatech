import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },
  title: {
    paddingTop: "10%",
    marginLeft: "5%",
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    flexDirection: "row",
  },

  text: {
    paddingTop: "5%",
    marginLeft: "5%",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
  },
  dropdown: {
    margin: 16,
    height: 50,
    color: "#000",
    fontSize: 17,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginStart: "5%",
    marginEnd: "5%",
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingHorizontal: 9,
  },

  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
  },
  iconStyle: {
    paddingHorizontal: 6,
  },
  dropDownContainerStyle: {
    backgroundColor: "#fff", // Cor de fundo da lista
    borderRadius: 15, // Borda arredondada do dropdown expandido
    borderWidth: 1,
    borderColor: "#fff",
  },
  textDescricao: {
    paddingTop: "4%",
    marginLeft: "5%",
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    flexDirection: "row",
  },
});

export default styles;
