import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importar as imagens
import Banner from '../../../assets/components/Banner/Banner.png';
import Bacaberia from '../../../assets/components/Brasao/brasaobaca.png';
import Arari from '../../../assets/components/Brasao/brasaoarari.png';
import Saoluis from '../../../assets/components/Brasao/brasaoslz.png';
import Viana from '../../../assets/components/Brasao/brasaoviana.png';

// Componente para os cards
const Card = ({ imageSource, title, onPress }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.cardImage} />
    <TouchableOpacity style={styles.participateButton} onPress={onPress}>
      <Text style={styles.participateButtonText}>Participe</Text>
    </TouchableOpacity>
  </View>
);

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Banner no topo */}
      <Image source={Banner} style={styles.banner} />

      {/* Título */}
      <Text style={styles.title}>Campeonatos</Text>

      {/* Cards com os brasões */}
      <View style={styles.cardsContainer}>
        <Card 
          imageSource={Bacaberia} 
          title="Bacabeira" 
          onPress={() => navigation.navigate('Informação campeonato Bacabeira')} 
        />
        <Card 
          imageSource={Arari} 
          title="Arari" 
          onPress={() => navigation.navigate('Informação campeonato Bacabeira')} 
        />
        <Card 
          imageSource={Saoluis} 
          title="São Luís" 
          onPress={() => navigation.navigate('Informação campeonato Bacabeira')} 
        />
        <Card 
          imageSource={Viana} 
          title="Viana" 
          onPress={() => navigation.navigate('Informação campeonato Bacabeira')} 
        />
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Pagamentos')}>
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
    backgroundColor: '#F5F5F5', 
  },
  banner: { 
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginTop: 20, 
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
    width: 150, // Aumente a largura da imagem
    height: 150, // Aumente a altura da imagem
    resizeMode: 'contain',
    marginBottom: 10, 
  },
  participateButton: {
    backgroundColor: '#F0E68C', // Cor do botão
    padding: 20, // Aumente o padding do botão
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  participateButtonText: {
    color: '#333', 
    fontSize: 18, // Aumente o tamanho do texto do botão
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
