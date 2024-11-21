import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  Title: {
    paddingTop: "5%",
    marginLeft: "3%",
    marginBottom: "10%",
    color: "#283949",
    fontSize: 30,
    fontWeight: "bold",
  },
  boxDescription: {
    marginBottom: 10,
  },

  TextInput: {
    margin: 10,
    color: "#000",
    fontSize: 15,
    height: 40,
    borderColor: "#fff",
    marginStart: "5%",
    // marginEnd: "5%",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    paddingHorizontal: 9,
  },

  text: {
    marginLeft: "5%",
    color: "#283949",
    fontSize: 17,
    fontWeight: "bold",
  },

  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },

  modalButton: {
    flex: 1,
    height: 40,
    borderRadius: 999,
    justifyContent: "center",
    alignContent: "center",
    margin: 17,
  },
});

export default styles;
