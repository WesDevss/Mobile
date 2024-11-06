import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Brasao() {
  return (
    <View style={styles.container}>
      {/* Linha 1 */}
      <View style={styles.row}>
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
      </View>
      
      {/* Linha 2 */}
      <View style={styles.row}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',  // Centraliza as linhas na tela
    marginBottom: 20,  // Espaço inferior entre as linhas
  },
  row: {
    flexDirection: 'row',  // Organiza os brasões em linha
    justifyContent: 'center',  // Centraliza os brasões na linha
    marginBottom: 10,  // Espaço entre as linhas
  },
  brasao: {
    width: 70,  // Largura de cada brasão
    height: 70,  // Altura de cada brasão
    marginHorizontal: 10,  // Espaço horizontal entre os brasões
  },
});
