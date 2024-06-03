import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
        color: 'black'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 15, //en 15 para abajo estaria bien, pero en ios esta muy alto, acordate Platform.0S = 'android' ? 15 : 0,
    },
})

