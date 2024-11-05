// src/assets/pages/perfil/TelaPerfil.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaPerfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Text style={styles.infoLabel}>Nome:</Text>
      <Text style={styles.infoText}>Nome do Usuário</Text>
      <Text style={styles.infoLabel}>Email:</Text>
      <Text style={styles.infoText}>usuario@email.com</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
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
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
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
