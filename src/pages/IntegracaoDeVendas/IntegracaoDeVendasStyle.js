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
    margin: 10,
    height: 50,
    color: "#000",
    fontSize: 17,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginStart: "5%",
    marginEnd: "5%",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    paddingHorizontal: 9,
  },

  placeholderStyle: {
    fontSize: 15,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
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

  quantidadeInput: {
    marginTop: 5,
    marginBottom: 10,
    color: "#000",
    alignItems: "center",
    paddingHorizontal: 9,
    fontSize: 15,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
  },
  boxSell: {
    backgroundColor: "#fff",
    width: 370,
    height: 250,
    borderRadius: 10,
    padding: "4%",
    gap: 10,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },

  textSell: {
    fontSize: 15,
  },

  dropdownSize: {
    marginTop: 5,
    width: "100%",
    height: 50,
    color: "#000",
    fontSize: 17,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    paddingHorizontal: 9,
  },

  textTrasanction: {
    fontSize: 17,
    fontWeight: "bold",
  },
  boxTransaction: {
    backgroundColor: "#fff",
    width: 370,
    height: 250,
    borderRadius: 10,
    padding: "4%",
    gap: 25,
  },

  BoxButton: {
    flexDirection: "row",
    gap: 50,
  },
  saveButton: {
    backgroundColor: "#32bc9b",
    width: 160,
    height: 50,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    backgroundColor: "#ff784b",
    width: 160,
    height: 50,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#fff'
  }

});

export default styles;