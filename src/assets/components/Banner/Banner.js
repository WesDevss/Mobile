import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./Banner.png')}  // Caminho para a imagem do banner
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,  // Define a margem inferior do banner
  },
  logo: {
    width: width,     // Define a largura como a largura total da tela
    height: 200,      // Altura do banner
  },
});
