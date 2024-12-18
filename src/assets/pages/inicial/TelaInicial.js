import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Logo from '../../../assets/components/Logo/Logo'; // Caminho da sua logo

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo /> {/* Exibindo a Logo */}

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.cadastroButton} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastroButtonText}>Cadastro</Text>
      </TouchableOpacity>

      {/* Botão de Login Admin */}
      <TouchableOpacity style={styles.loginAdminButton} onPress={() => navigation.navigate('LoginAdmin')}>
        <Text style={styles.loginAdminButtonText}>Login Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    padding: 20,
    backgroundColor: '#74543B', // Cor de fundo
  },
  // Estilo do botão de Login
  loginButton: {
    backgroundColor: '#EEC77C', // Cor amarela
    paddingVertical: 15,
    borderColor: '#000000',
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: '70%', // Largura de 50%
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    borderColor: '#000000',
    fontWeight: 'bold',
    fontStyle: 'Dm Sans',
  },
  // Estilo do botão de Cadastro
  cadastroButton: {
    backgroundColor: '#fff', // Cor branca
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderColor: '#000000',
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  cadastroButtonText: {
    color: 'black', // Cor do texto
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'Dm Sans',
  },
  // Estilo do botão de Login Admin
  loginAdminButton: {
    backgroundColor: '#DADADA', // Cor #DADADA para o botão Admin
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderColor: '#000000',
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  loginAdminButtonText: {
    color: 'black', // Cor do texto do botão Admin
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'Dm Sans',
  },
});
