import React from 'react'
import { Pressable, Text, Platform, StyleSheet } from 'react-native'

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }:Props) => {
  return (
    <Pressable
            onPress={ () => onPress && onPress() }  //esto es por si es nulo el onPress  
            onLongPress={ () => onLongPress && onLongPress() } //lo dejas apretado y te lo devuelve a cero       
            style = { ({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed // es cambiar el color cuando presiona el boton
            ] }
        >
            <Text style={{ 
                color: Platform.OS === 'android' ? 'white' : '#4746AB' 
            }}>{ label }</Text>
        </Pressable>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6': 'white', //si el SO es android o IOS es personalizable los colores
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,        
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
}
})
