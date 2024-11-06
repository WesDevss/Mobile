import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaInscricao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo do evento */}
      <Image 
        style={styles.logo}
      />

      {/* Informações sobre o evento */}
      <Text style={styles.title}>Campeonato de Bacabeira</Text>
      <Text style={styles.subtitle}>1ª edição</Text>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>Data: 18/10/2024</Text>
        <Text style={styles.detail}>Horário: 15:00 – 17:00</Text>
        <Text style={styles.detail}>Total de Vagas: 50 Participantes</Text>
        <Text style={styles.detail}>Inscrições abertas até: 08/10/2024</Text>
        <Text style={styles.detail}>Valor: R$ 20,00</Text>
      </View>

      {/* Mapa ou imagem de localização (opcional) */}
      <Image 
        style={styles.map}
      />

      {/* Botão de pagamento */}
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentText}>Pagamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0e6df',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#34a853',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  paymentText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
