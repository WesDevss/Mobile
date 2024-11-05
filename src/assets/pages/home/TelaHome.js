import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/components/Logo/Logo'; 

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <Logo />  {/* Exibindo a Logo */}
      <Text style={styles.title}>Bem-vindo ao DamasZone</Text>
      <Image source={{ uri: 'link_da_imagem' }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#74543B', // Exemplo de cor de fundo (aliceblue)
  },
    title: { 
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40 },
  
  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 20, 
    borderRadius: 5 
  },
  link: { 
    color: 'blue' 
  }
});
