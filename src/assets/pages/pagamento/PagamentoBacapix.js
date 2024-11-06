import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usando o MaterialIcons para ícones consistentes
import { useNavigation } from '@react-navigation/native'; // Importando o hook para navegação

const PagamentoBacapix = () => {
  const [chavePix, setChavePix] = useState('');
  const navigation = useNavigation(); // Usando o hook useNavigation para navegação

  const handleChavePixChange = (text) => {
    setChavePix(text);
  };

  const handleConfirmPayment = () => {
    // Implementar lógica de pagamento aqui
    console.log('Pagamento confirmado!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/components/Brasao/brasaobaca.png')}
          style={styles.brasao}
          resizeMode="contain" // Garantindo que a imagem não será cortada
        />
      </View>

      <Text style={styles.title}>Campeonato de Bacabeira</Text>
      <Text style={styles.subtitle}>1 edição</Text>

      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => navigation.navigate('pagamento campeonato Bacabeira')} // Navegação para a tela desejada
          accessibilityLabel="Pagar com cartão"
          accessibilityRole="button"
        >
          <MaterialCommunityIcons name="credit-card-outline" size={25} color="#fff" />
          <Text style={styles.optionText}>CARTÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => navigation.navigate('PixPaymentScreen')} // Navegação para a tela de pagamento com Pix
          accessibilityLabel="Pagar com Pix"
          accessibilityRole="button"
        >
          <MaterialCommunityIcons name="qrcode-scan" size={25} color="#fff" />
          <Text style={styles.optionText}>Pague com Pix</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.qrCodeContainer}>
        <Image
          source={require('../../../assets/components/QR Code/OIP.jpg')}
          style={styles.qrCode}
          resizeMode="contain" // Garantindo que o QR code será redimensionado corretamente
        />
        <Text style={styles.qrCodeText}>Escaneie o QR Code ou copie o código abaixo</Text>
        <Text style={styles.chavePixText}>d98e05ae3c445fbbde49e9916840013</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o brasão no topo
    marginBottom: 20,
  },
  brasao: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
    marginLeft: 10,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
  qrCodeText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  chavePixText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#4CAF50', // Verde para o botão de confirmar
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#938F86', // Cor de fundo igual ao código 2
  },
  navButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
});

export default PagamentoBacapix;
