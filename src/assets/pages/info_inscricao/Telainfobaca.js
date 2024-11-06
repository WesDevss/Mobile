import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando o Icon do MaterialIcons para manter a consistência

export default function Telainfobaca({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo do evento */}
        <Image 
          source={require('../../../assets/components/Brasao/brasaobaca.png')} 
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

        {/* Botão de navegação para a tela de pagamento */}
        <TouchableOpacity 
          style={styles.paymentButton} 
          onPress={() => navigation.navigate('pagamento campeonato Bacabeira')} // Aqui é onde a navegação acontece
        >
          <Text style={styles.paymentText}>Pagamento</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de navegação inferior */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('TelapagamentoBaca')}>
          <Icon name="payment" size={24} color="black" />
          <Text style={styles.navButtonText}>Pagamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inscricao')}>
          <Icon name="person-add" size={24} color="black" />
          <Text style={styles.navButtonText}>Inscrição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Configuracoes')}>
          <Icon name="settings" size={24} color="black" />
          <Text style={styles.navButtonText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6df',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200, 
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 20, 
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18, 
    marginBottom: 5,
    textAlign: 'center', 
  },
  paymentButton: {
    backgroundColor: '#34a853',
    padding: 20, 
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 40, 
  },
  paymentText: {
    color: '#fff',
    fontSize: 22, 
    fontWeight: 'bold',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#938F86', 
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 12, 
    color: '#333',
    marginTop: 5,
  },
});
