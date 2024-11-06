import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/components/Logo/DamasLogo.png'; // Logo da confederação de damas

// Componente para os cards de administração
const AdminCard = ({ title, value, buttonText, onPress }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
      <Text style={styles.cardButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

export default function TelaAdmin({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Painel Administrativo</Text>

      {/* Cards de informações administrativas */}
      <View style={styles.cardsContainer}>
        <AdminCard 
          title="Total de Inscritos"
          value="150" // Exemplo de número, você pode usar um estado para atualizar
          buttonText="Ver Detalhes"
          onPress={() => navigation.navigate('DetalhesInscritos')} // Navega para detalhes dos inscritos
        />
        <AdminCard 
          title="Relatório de Inscrições"
          value="Disponível"
          buttonText="Gerar Relatório"
          onPress={() => navigation.navigate('GerarRelatorio')} // Navega para a geração de relatório
        />
        <AdminCard 
          title="Total de Dinheiro Destinado"
          value="R$ 10.000,00" // Exemplo de valor, também pode ser dinâmico
          buttonText="Ver Detalhes"
          onPress={() => navigation.navigate('DetalhesFinanceiros')} // Navega para ver detalhes financeiros
        />
      </View>

      {/* Barra de navegação inferior com a logo */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Pagamentos')}>
          <Icon name="payment" size={24} color="black" />
          <Text style={styles.navButtonText}>Pagamento</Text>
        </TouchableOpacity>
        
        {/* Logo como botão centralizado na barra */}
        <TouchableOpacity style={styles.logoButton} onPress={() => navigation.navigate('AdminHome')}>
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
    padding: 10,
  },
  card: {
    width: '45%',
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#F0E68C',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  cardButtonText: {
    color: '#333',
    fontSize: 16,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
