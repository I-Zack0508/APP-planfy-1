import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';

export default function Adicionar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log("Home")}>
                <Image
                    style={styles.botao}
                    source={require("../../assets/home.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Adicionar")}>
                <Image
                    style={styles.botao}
                    source={require("../../assets/botaoAdd.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Calendário")}>
                <Image
                    style={styles.botao}
                    source={require("../../assets/calender.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 10,
        elevation: 10, // sombra Android
        shadowColor: '#000', // sombra iOS
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    botao: {
        width: 35,
        height: 35,
    },
});
