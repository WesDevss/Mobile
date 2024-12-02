import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/components/Logo/DamasLogo.png';

// Imagens para os brasões
import Bacaberia from '../../../assets/components/Brasao/brasaobaca.png';
import Arari from '../../../assets/components/Brasao/brasaoarari.png';
import Saoluis from '../../../assets/components/Brasao/brasaoslz.png';
import Viana from '../../../assets/components/Brasao/brasaoviana.png';

// Componente para os cards
const Card = ({ imageSource, title }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.cardImage} />
    <TouchableOpacity style={styles.participateButton}>
      <Text style={styles.participateButtonText}>Participe</Text>
    </TouchableOpacity>
  </View>
);

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Campeonatos</Text>

      {/* Cards com os brasões */}
      <View style={styles.cardsContainer}>
        <Card imageSource={Bacaberia} title="Bacabal" />
        <Card imageSource={Arari} title="Arari" />
        <Card imageSource={Saoluis} title="São Luís" />
        <Card imageSource={Viana} title="Viana" />
      </View>

      {/* Barra de navegação inferior com a logo */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Pagamento')}>
          <Icon name="payment" size={24} color="black" />
          <Text style={styles.navButtonText}>Pagamento</Text>
        </TouchableOpacity>
        
        {/* Logo como botão centralizado na barra */}
        <TouchableOpacity style={styles.logoButton} onPress={() => navigation.navigate('Inscrito')}>
          <Image source={Logo} style={styles.logo} />
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
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  card: {
    width: '45%',
    marginBottom: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  participateButton: {
    backgroundColor: '#F0E68C',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  participateButtonText: {
    color: '#333',
    fontSize: 18,
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
  logoButton: {
    alignItems: 'center',
    marginBottom: 0, // ajustado para alinhar a logo mais acima
  },
  logo: {
    width: 60, // tamanho da logo
    height: 60,
    resizeMode: 'contain',
    marginTop: -5, // ajuste para elevar a logo
  },
});
