import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/components/Logo/Logo';
import Banner from '../../../assets/components/Banner/Banner';
import Brasao from '../../../assets/components/Brasao/Brasao';

export default function TelaHome() {
  // Ref para controlar a animação de brilho
  const iconScale = useRef(new Animated.Value(1)).current;

  // Funções para aumentar e reduzir o brilho
  const handlePressIn = () => {
    Animated.timing(iconScale, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(iconScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />  {/* Barra de Status */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Banner />  {/* Exibindo o Banner no topo */}
        <Logo />    {/* Exibindo a Logo abaixo do Banner */}
        
        <Text style={styles.title}>Campeonatos</Text>
        
        {/* Grid de campeonatos */}
        <View style={styles.championshipsGrid}>
          {/* Exemplo de um Campeonato */}
          <View style={styles.championshipItem}>
            <Brasao source={{ uri: 'link_para_o_brasao' }} style={styles.brasao} />
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateText}>Participe</Text>
            </TouchableOpacity>
          </View>
          {/* Repita o item de campeonato conforme necessário */}
        </View>

        {/* Menu Inferior */}
        <View style={styles.bottomMenu}>
          {/** Ícones do menu */}
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="home" size={30} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="payment" size={30} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Pagamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="assignment" size={30} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Inscrição</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="settings" size={30} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#74543B',
  },
  statusBar: { 
    height: 24, 
    backgroundColor: 'black' 
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: { 
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  championshipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  championshipItem: {
    width: 150,
    alignItems: 'center',
    margin: 10,
  },
  brasao: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  participateButton: {
    width: 120,
    height: 42,
    backgroundColor: '#C4C4C4',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 10,
  },
  participateText: {
    fontSize: 20,
    color: 'black',
  },
  bottomMenu: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#938F86',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'black',
    opacity: 0.6,
    textAlign: 'center',
  },
});
