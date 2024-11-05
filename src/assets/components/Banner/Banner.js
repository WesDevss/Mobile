import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./Banner.png')}  // Caminho para a imagem da logo
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,  // Define a margem inferior da logo
  },
  logo: {
    width: width, 
    height: 200, 
  },
});
