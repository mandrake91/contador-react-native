import { SafeAreaView, Text, View } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

//ctrl + k + c comentas la linea y con ctrl + k + u descomentas
export const App = () => {
  return (
    //SafeAreaView para que el contenido no esta al borde de la pantalla, pone un borde a la pantalla
    <SafeAreaView style={{ flex: 1}}>
      {/* <HelloWorldScreen name='Fernando Herrera' /> */}
      <CounterScreen/>
    </SafeAreaView>
  )
}


