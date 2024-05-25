import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name?: string; // el ? lo hace opcional, es como la interface de java
}
// World seria el nombre por defecto si no le llega nada en la prop
export const HelloWorldScreen = ({ name = 'World' } : Props) => {
  return (
    <View style={ styles.container }>
        <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.title }>Hello, { name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})