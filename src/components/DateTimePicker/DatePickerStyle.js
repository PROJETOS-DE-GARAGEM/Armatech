import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    ButtonIconPicker: {
        flex: 1,
        position: 'absolute',
    },
    iconCalendario: {
        marginBottom: 4,
        paddingEnd: 12,
    },
    InputText: {
        width: '100%',
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
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    TextTittle: {
        fontSize: 15,
    },
});

export default style;
