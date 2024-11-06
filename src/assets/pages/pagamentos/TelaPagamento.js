import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function TelaPagamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento Campeonato</Text>
      <Text style={styles.subtitle}>1ª edição</Text>
      
      <TouchableOpacity style={styles.pixButton}>
        <Text style={styles.pixText}>Pague com Pix</Text>
      </TouchableOpacity>
      
      {/* Exibir QR Code do Pix */}
      <Image 
        source={require('../../components/QRCode/QRcode.png')}  // Ajuste o caminho se necessário
        style={styles.qrCode}
      />
      
      <Text style={styles.instruction}>
        Escaneie o QR Code ou copie o código abaixo e cole no seu app bancário.
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
    backgroundColor: '#FFF8F0', // Cor de fundo mais suave.
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  pixButton: {
    backgroundColor: '#04D361',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 20,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  pixText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  qrCode: {
    width: 180,
    height: 180,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  instruction: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  codeContainer: {
    backgroundColor: '#EFEFEF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    width: '85%',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'monospace',
    color: '#444',
  },
  confirmButton: {
    backgroundColor: '#34A853',
    paddingVertical: 15,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  confirmText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
