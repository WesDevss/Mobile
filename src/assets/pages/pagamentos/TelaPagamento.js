import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPagamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pagamentos</Text>
      <Text>Detalhes sobre os pagamentos e opções disponíveis.</Text>
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
