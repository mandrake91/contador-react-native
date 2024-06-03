import { SafeAreaView, Text, View } from 'react-native';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons';

//ctrl + k + c comentas la linea y con ctrl + k + u descomentas
//la parte de settings es para hacer los iconos globales
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon { ...props } />
      }}
    >
    {/* //SafeAreaView para que el contenido no esta al borde de la pantalla, pone un borde a la pantalla */}
    <SafeAreaView style={{ flex: 1}}>
      {/* <HelloWorldScreen name='Fernando Herrera' /> */}
      {/* <CounterScreen/> */}
      <CounterM3Screen />
    </SafeAreaView>
    </PaperProvider>
  )
}


