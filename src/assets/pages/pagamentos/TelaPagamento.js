import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function TelaPagamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campeonato de Bacabeira</Text>
      <Text style={styles.subtitle}>1ª edição</Text>
      
      <TouchableOpacity style={styles.pixButton}>
        <Text style={styles.pixText}>Pague com Pix</Text>
      </TouchableOpacity>
      
      {/* Imagem de QR Code simulada */}
      <Image 
        style={styles.qrCode}
      />
      
      <Text style={styles.instruction}>
        Escaneie o QR Code ou copie o código abaixo, cole em seu banco
      </Text>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>
          d598e05e3c445ffbde4a9e99f5840013
        </Text>
      </View>
      
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0e6df',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  pixButton: {
    backgroundColor: '#04d361',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  pixText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrCode: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  codeContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  codeText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  confirmButton: {
    backgroundColor: '#34a853',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
