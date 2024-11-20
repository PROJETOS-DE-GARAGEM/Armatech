import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283949",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -20,
    alignSelf: "center",
  },
  boxText: {
    marginTop: 15,
    marginStart: 12,
    marginEnd: 12,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "justify",
  },
  boxIcons: {
    gap: 50,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textLinking: {
    marginTop: 30,
    color: "#fff",
    fontSize: 15,
    textAlign: "justify",
  },
});

export default style;
