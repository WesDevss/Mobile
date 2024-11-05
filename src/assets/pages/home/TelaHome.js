import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/components/Logo/Logo';
import Banner from '../../../assets/components/Banner/Banner';
import Brasao from '../../../assets/components/Brasao/Brasao';

export default function TelaHome() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />  {/* Exibindo a Logo */}
        <Text style={styles.title}>Bem-vindo ao DamasZone</Text>
        
        <Banner /> {/* Exibindo o Banner */}
        
        <Text style={styles.subtitle}>Campeonatos</Text>
        
        {/* Exibindo os Brasões */}
        <View style={styles.brasaoContainer}>
          <Brasao /> {/* Brasão 1 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Participe</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.brasaoContainer}>
          <Brasao /> {/* Brasão 2 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Participe</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.brasaoContainer}>
          <Brasao /> {/* Brasão 3 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Participe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.brasaoContainer}>
          <Brasao /> {/* Brasão 4 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Participe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
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
});
