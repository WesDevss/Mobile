import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./Banner.png')}  // Caminho para a imagem do banner
        style={styles.Banner} 
        resizeMode="cover"  // A imagem cobre toda a área, podendo ser cortada
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',  // Garante que o container ocupe toda a largura da tela
    top: 0,  // Posiciona o banner no topo
    left: 0,  // Garante que ocupe toda a largura da tela
  },
  Banner: {
    width: '100%',    // A imagem ocupará 100% da largura da tela
    height: 220,      // Altura do banner, pode ser ajustada conforme necessário
  },
});
