import { StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image'

export default function Adicionar() {
    return (
        <View style={styles.container}>
            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/home.png")}
                />
                </a>
            </View>

            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/botaoAdd.png")}
                />
                </a>
            </View>

            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/calender.png")}
                />
                </a>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        padding: 5
    },

    botao: {
        width: 35,
        height: 35
    }, 
});