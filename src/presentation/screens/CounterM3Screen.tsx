import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

//El button ya no se usa, es viejo y poco personalizable, Pressble es mejor, documentacion https://reactnative.dev/docs/pressable
//El icono tiene muchas funcionalidades y se puede agregar en FAB por ejemplo pero no es conveniente
export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);  
  return (
    <View style={ globalStyles.centerContainer }>
        <Text style={ globalStyles.title }>{ count }</Text>
        <Icon name='accessibility-outline' size={ 35 }/> 
        <FAB
          onPress={() => setCount( count + 1 )}
          onLongPress={ () => setCount( 0 )}          
          style={ globalStyles.fab }
          icon="add" //mejor que label='+1'
        />
    </View>
  )
}
