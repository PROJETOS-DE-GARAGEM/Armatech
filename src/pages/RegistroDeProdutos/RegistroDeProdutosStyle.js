import { StyleSheet } from "react-native";

const style = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#283949",
    },
    keyboardAvoid: {
        flex: 1,
    },
    boxContainer: {
        paddingTop: "10%",
        flexDirection: "column",
        gap: 20,
    },
    boxDescription: {
        gap: 2,
    },
    Title: {
        paddingTop: "10%",
        marginLeft: "5%",
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
    },
    text: {
        marginLeft: "5%",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    Input: {
        margin: 10,
        color: "#000",
        fontSize: 15,
        height: 40,
        borderColor: "#fff",
        marginStart: "5%",
        marginEnd: "5%",
        backgroundColor: "#e5e7eb",
        borderRadius: 999,
        paddingHorizontal: 9,
    },
    dropdown: {
        color: "#000",
        height: 40,
        borderColor: "#fff",
        marginStart: "5%",
        marginEnd: "5%",
        backgroundColor: "#e5e7eb",
        borderRadius: 999,
        paddingHorizontal: 9,
        marginVertical: 5,
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
    btnBox: {
        flexDirection: "row",
    },
    btn: {
        flex: 1,
        height: 40,
        borderRadius: 999,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: 'center',
        margin: 17,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    },
})

export default style;