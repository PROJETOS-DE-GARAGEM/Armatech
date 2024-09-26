import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#283949",
    },
    ViewTitle: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        marginLeft: 5,
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
        flexDirection: "row",
    },
    buttonAddProduct: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32bc9b',
        borderRadius: 20,
        width: 100,
        height: 40,
        marginRight: "5%",
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
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
      text: {
        paddingTop: 5,
        marginLeft: "5%",
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        flexDirection: "row",
      },
      ViewFlatlist: {
        paddingTop: 10,
      },
    boxListContainer: {
        marginStart: "5%",
        marginEnd: "5%",
        backgroundColor: '#fff',
        marginBottom: 25,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
    },
    boxListEstoque: {
        padding: 15,
        marginHorizontal: 10,
    },
    nameList: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    detailsList: {
        fontSize: 17,
        padding: 2,
    },
    boxIconStyle: {
        marginRight: 20,
        gap: 20,
    },
})

export default style;