import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/components/Logo/Logo';
import Banner from '../../../assets/components/Banner/Banner';
import Brasao from '../../../assets/components/Brasao/Brasao';

export default function TelaHome() {
  const navigation = useNavigation();

  const renderBrasoes = () => {
    const brasoes = [1, 2, 3, 4]; // Array para mapear os brasões
    return brasoes.map((item, index) => (
      <View key={index} style={styles.brasaoContainer}>
        <Brasao />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Participe</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Logo />  {/* Exibindo a Logo */}
          <Text style={styles.title}>Bem-vindo ao DamasZone</Text>

          <Banner /> {/* Exibindo o Banner */}

          <Text style={styles.subtitle}>Campeonatos</Text>

          {/* Exibindo os Brasões */}
          {renderBrasoes()}
        </View>
      </ScrollView>

      {/* Barra de navegação com ícones */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Icon name="home" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pagamentos')} style={styles.navButton}>
          <Icon name="credit-card" size={24} color="#000" />
          <Text style={styles.navText}>Pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Inscricao')} style={styles.navButton}>
          <Icon name="pencil" size={24} color="#000" />
          <Text style={styles.navText}>Inscrição</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')} style={styles.navButton}>
          <Icon name="cog" size={24} color="#000" />
          <Text style={styles.navText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  brasaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFD700',  // Cor de fundo do botão
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#F8F8F8',
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
  },
});
