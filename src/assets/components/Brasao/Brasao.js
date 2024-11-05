import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Brasao() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./brasaoarari.png')}  // Caminho para o primeiro brasão
        style={styles.brasao}
        resizeMode="contain" 
      />
      <Image 
        source={require('./brasaobaca.png')}  // Caminho para o segundo brasão
        style={styles.brasao}
        resizeMode="contain" 
      />
      <Image 
        source={require('./brasaoslz.png')}  // Caminho para o terceiro brasão
        style={styles.brasao}
        resizeMode="contain" 
      />
      <Image 
        source={require('./brasaoviana.png')}  // Caminho para o quarto brasão
        style={styles.brasao}
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  // Define os brasões em linha
    justifyContent: 'space-around',  // Espaça os brasões uniformemente
    alignItems: 'center',
    marginBottom: 20,
  },
  brasao: {
    width: 70,  // Largura de cada brasão
    height: 70,  // Altura de cada brasão
  },
});
