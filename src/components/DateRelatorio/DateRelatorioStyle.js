import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    paddingHorizontal: 10,
    width: "37%",
  },
  InputText: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    height: 40,
  },
  ButtonIconPicker: {
    padding: 5,
  },
  iconCalendario: {
    marginLeft: 5,
  },
  separatorText: {
    fontSize: 16,
    color: "#333",
    marginHorizontal: 5,
  },
});
