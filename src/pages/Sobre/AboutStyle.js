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
  boxDetails: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: '90%',
    marginEnd: '5%',
    marginStart: '5%',
    borderRadius: 10,
  },
  titleBox: {
    margin: 15,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitleBox: {
    color: '#283949',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textDetailsBox: {
    color: '#283949',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'justify',
    margin: 10
  },
});

export default style;
