import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },
  ViewProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: "10%",
    marginBottom: "10%",
  },
  NameUser: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  containerInformation: {
    padding: "4%",
    borderRadius: 20,
    marginBottom: 25,
    marginStart: "3%",
    marginEnd: "3%",
    backgroundColor: "#fff",
    height: "35%",
    width: '90%'
  },
  informationTitle: {
    color: '#283949',
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borderInformation: {
    borderBottomWidth: 0.7,
    borderColor: "#e5e7eb",
  },
  informationText: {
    margin: 25,
    color: "#999",
  },
  buttonLogout: {
    width: 100, // Defina uma largura fixa
    marginTop: 15,
    backgroundColor: "#ff784b",
    borderRadius: 999,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },

  Input: {
    margin: 10,
    color: "#000",
    fontSize: 15,
    height: 40,
    borderColor: "#fff",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    paddingHorizontal: 9,
  },
});

export default style;
