import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

  // Dados dos brasões (isso pode ser alterado conforme os brasões reais)
  const brasoes = [
    { id: 1, uri: 'link_para_o_brasao_1' },
    { id: 2, uri: 'link_para_o_brasao_2' },
    { id: 3, uri: 'link_para_o_brasao_3' },
    { id: 4, uri: 'link_para_o_brasao_4' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />  {/* Barra de Status */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Banner />  {/* Exibindo o Banner no topo */}
        
        <Text style={styles.title}>Campeonatos</Text>
        
        {/* Grid de campeonatos */}
        <View style={styles.championshipsGrid}>
          {/* Mapeando os brasões e criando os itens dinamicamente */}
          {brasoes.map((brasao) => (
            <View key={brasao.id} style={styles.championshipItem}>
              <Brasao source={{ uri: brasao.uri }} style={styles.brasao} />
              <TouchableOpacity style={styles.participateButton}>
                <Text style={styles.participateText}>Participe</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Menu Inferior */}
        <View style={styles.bottomMenu}>
          {/** Ícones do menu */}
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="home" size={22} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="payment" size={22} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Pagamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="assignment" size={22} color="black" />
            </Animated.View>
            <Text style={styles.iconText}>Inscrição</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.menuItem}>
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Icon name="settings" size={22} color="black" />
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
    height: 20, // Ajustado para caber melhor
    backgroundColor: 'black' 
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 80, // Ajustado para um espaçamento menor
  },
  title: { 
    fontSize: 20, // Ajustado para caber na tela
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  championshipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  championshipItem: {
    width: 120, // Ajustado para caber melhor
    alignItems: 'center',
    margin: 5,
  },
  brasao: {
    width: 60, // Ajustado para caber melhor
    height: 60, // Ajustado para caber melhor
    resizeMode: 'contain',
  },
  participateButton: {
    width: 90, // Ajustado para caber melhor
    height: 30, // Ajustado para caber melhor
    backgroundColor: '#C4C4C4',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 5,
  },
  participateText: {
    fontSize: 14, // Ajustado para caber melhor
    color: 'black',
  },
  bottomMenu: {
    width: '100%',
    height: 55, // Ajustado para caber melhor
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#938F86',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  menuItem: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 8, // Ajustado para caber melhor
    color: 'black',
    opacity: 0.6,
    textAlign: 'center',
  },
});
