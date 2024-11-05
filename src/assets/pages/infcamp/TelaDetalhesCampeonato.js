// src/assets/pages/campeonato/TelaDetalhesCampeonato.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Brasao from '../../components/Brasao/Brasao';

export default function TelaDetalhesCampeonato({ route }) {
  const { campeonatoNome } = route.params;

  return (
    <View style={styles.container}>
      <Brasao />
      <Text style={styles.title}>{campeonatoNome}</Text>
      <Text style={styles.description}>
        Detalhes sobre o campeonato {campeonatoNome}. Aqui você pode ver a data, local e mais informações.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
