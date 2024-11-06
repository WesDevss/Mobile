import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaConfiguracoes({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header com o título */}
      <View style={styles.header}>
        <Text style={styles.title}>Ajustes</Text>
      </View>

      {/* Seção do perfil do usuário */}
      <View style={styles.profileContainer}>
        <Text style={styles.userName}>Jonas Macroni</Text>
      </View>

      {/* Botões de navegação */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('InformacoesContato')}
      >
        <Text style={styles.optionText}>Informações de contato</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={styles.optionText}>Ranking</Text>
      </TouchableOpacity>

      {/* Informações detalhadas do usuário */}
      <View style={styles.userDetails}>
        <Text style={styles.detailText}>Email: jonas.macroni@gmail.com</Text>
        <Text style={styles.detailText}>Cidade: Bacabeira</Text>
        <Text style={styles.detailText}>CPF: 610.771.003-03</Text>
        <Text style={styles.detailText}>Ranking: 6° Lugar</Text>
      </View>
    </View> // Fechamento da tag View principal
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A0522D', // Cor do topo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
  },
  userDetails: {
    padding: 20,
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
});
