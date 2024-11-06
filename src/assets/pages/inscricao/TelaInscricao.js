import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaInscricao({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo do evento */}
      <Image 
        source={require('../../components/Brasao/brasaobaca.png')}
        style={styles.logo}
      />

      {/* Informações sobre o evento */}
      <Text style={styles.title}>Campeonato de Bacabeira</Text>
      <Text style={styles.subtitle}>1ª edição</Text>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}><Text style={styles.bold}>Data:</Text> 18/10/2024</Text>
        <Text style={styles.detail}><Text style={styles.bold}>Horário:</Text> 15:00 – 17:00</Text>
        <Text style={styles.detail}><Text style={styles.bold}>Total de Vagas:</Text> 50 Participantes</Text>
        <Text style={styles.detail}><Text style={styles.bold}>Inscrições abertas até:</Text> 08/10/2024</Text>
        <Text style={styles.detail}><Text style={styles.bold}>Valor:</Text> R$ 20,00</Text>
      </View>

      {/* Mapa ou imagem de localização (opcional) */}
      <Image 
        source={require('../../components/Mapa/MapaBaca.png')}
        style={styles.map}
      />

      {/* Botão de pagamento */}
      <TouchableOpacity 
        style={styles.paymentButton}
        onPress={() => navigation.navigate('TelaPagamento')}
      >
        <Text style={styles.paymentText}>Pagamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // (seu código de estilo permanece o mesmo

  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0e6df',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detail: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  map: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#34a853',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  paymentText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
