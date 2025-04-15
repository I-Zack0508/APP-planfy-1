import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Header from './src/components/Header';
import Semana from './src/components/Semana';
import Adicionar from './src/components/Adicionar';
import { ScrollView } from 'react-native'; // Ajuste aqui para o ScrollView correto

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Header />
          <Semana />
          
          <View style={styles.foto}>
            <Image
              style={styles.borda}
              source={require("./assets/bordas3.png")}
            />
          </View>
        </View>
      </ScrollView>

      {/* Menu fixo com position: absolute */}
      <View style={styles.footer}>
        <Adicionar />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    position: 'absolute',  // Alteração para posição absoluta
    bottom: 0,             // Garantir que fique no fundo da tela
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Ajuste o espaçamento do menu conforme necessário
    zIndex: 10, // Garantir que o menu fique acima de outros componentes
  },

  borda: {
    marginLeft: '-20px',
    width: 130,
    height: 130,
  },

  foto: {
    marginTop: 580,
  },

  scrollContent: {
    paddingBottom: 100, // Espaço para o menu fixo não cobrir conteúdo
  },
});
