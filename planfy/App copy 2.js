import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'
import Header from './src/components/Header';
import Adicionar from './src/components/Adicionar';
import Login from './src/components/Login';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <View style={styles.bordaContainer}>
          <Image
            style={styles.borda2}
            source={require("./assets/bordas2.png")} />
        </View>

        <View style={styles.login}>
          <Login />
        </View>

        <View style={styles.bordaContainer2}>
          <Image
            style={styles.borda4}
            source={require("./assets/bordas4.png")} />
        </View>

        <View style={styles.adc}>
          <Adicionar />
        </View>


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bordaContainer: {
    marginTop: -60,
    paddingBottom: 86,
    zIndex: '-1'
  },
  borda2: {
    width: 180,
    height: 180
  },
  bordaContainer2: {
    paddingTop: 60,
    alignItems: 'flex-end',
    zIndex: -1
  },
  borda4: {
    width: 180,
    height: 130
  },
  borda: {
    width: 130,
    height: 130
  },
  adc: {
    paddingTop:810,
    position: 'fixed'
  },

});
