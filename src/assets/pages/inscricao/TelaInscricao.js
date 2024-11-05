import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaInscricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Inscrição</Text>
      <Text>Formulário e informações para a inscrição nos campeonatos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
