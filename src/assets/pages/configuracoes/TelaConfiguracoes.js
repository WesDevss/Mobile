import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaConfiguracoes({ navigation }) {
  const [userData, setUserData] = useState({ email: '', cpf: '', cidade: '', nome: '' });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail'); // Substitua pela chave correta se necessário
        if (email) {
          const data = await AsyncStorage.getItem(email);
          if (data) {
            setUserData(JSON.parse(data));
          }
        }
      } catch (error) {
        console.log('Erro ao carregar dados do usuário:', error);
      }
    };
    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header com o título */}
      <View style={styles.header}>
        <Text style={styles.title}>Ajustes</Text>
      </View>

      {/* Seção do perfil do usuário */}
      <View style={styles.profileContainer}>
        <Text style={styles.userName}>{userData.nome}</Text>
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
        <Text style={styles.detailText}>Email: {userData.email}</Text>
        <Text style={styles.detailText}>Cidade: {userData.cidade}</Text>
        <Text style={styles.detailText}>CPF: {userData.cpf}</Text>
        <Text style={styles.detailText}>Ranking: 1900° Lugar</Text>
      </View>
    </View>
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
    backgroundColor: '#A0522D',
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
