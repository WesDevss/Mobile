import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usando o MaterialIcons para ícones consistentes
import { useNavigation } from '@react-navigation/native'; // Importando o hook para navegação

const TelaPagamentoBaca = () => {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (text) => {
    setCardNumber(text);
  };

  const handleExpirationDateChange = (text) => {
    setExpirationDate(text);
  };

  const handleCvvChange = (text) => {
    setCvv(text);
  };

  const handleConfirmPayment = () => {
    // Implement payment processing logic here
    console.log('Payment confirmed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/components/Brasao/brasaobaca.png')}
          style={styles.brasao}
        />
      </View>

      <Text style={styles.title}>
        Campeonato de Bacabeira
      </Text>
      <Text style={styles.subtitle}>
        1 edição
      </Text>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentOption}>
          <Icon name="credit-card" size={25} color="#fff" />
          <Text style={styles.optionText}>CARTÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => navigation.navigate('pagamento campeonato Bacabeira PIX')} // Navegue para a tela PIX
        >
          <Icon name="qr-code" size={25} color="#fff" />
          <Text style={styles.optionText}>Pague com Pix</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardDetails}>
        <TextInput
          style={styles.input}
          placeholder="1234 2589 0332 5685"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
        />
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expirationDate}
            onChangeText={handleExpirationDateChange}
          />
          <TextInput
            style={styles.input}
            placeholder="CVC"
            keyboardType="numeric"
            value={cvv}
            onChangeText={handleCvvChange}
          />
        </View>
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
    justifyContent: 'center', // Centraliza o brasão
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
  cardDetails: {
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#4CAF50', // Verde para o botão confirmar
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

export default TelaPagamentoBaca;
