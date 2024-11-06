import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/components/Logo/Logo';
import Banner from '../../../assets/components/Banner/Banner';
import Brasao from '../../../assets/components/Brasao/Brasao';

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />  {/* Barra de Status */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Banner />  {/* Exibindo o Banner no topo */}
        <Logo />    {/* Exibindo a Logo abaixo do Banner */}
        
        <Text style={styles.title}>Campeonatos</Text>
        
        {/* Grid de campeonatos */}
        <View style={styles.championshipsGrid}>
          {/* Campeonato 1 */}
          <View style={styles.championshipItem}>
            <Brasao source={{ uri: 'link_para_o_brasao_1' }} style={styles.brasao} />
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateText}>Participe</Text>
            </TouchableOpacity>
          </View>
          
          {/* Campeonato 2 */}
          <View style={styles.championshipItem}>
            <Brasao source={{ uri: 'link_para_o_brasao_2' }} style={styles.brasao} />
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateText}>Participe</Text>
            </TouchableOpacity>
          </View>
          
          {/* Campeonato 3 */}
          <View style={styles.championshipItem}>
            <Brasao source={{ uri: 'link_para_o_brasao_3' }} style={styles.brasao} />
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateText}>Participe</Text>
            </TouchableOpacity>
          </View>
          
          {/* Campeonato 4 */}
          <View style={styles.championshipItem}>
            <Brasao source={{ uri: 'link_para_o_brasao_4' }} style={styles.brasao} />
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateText}>Participe</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Inferior */}
        <View style={styles.bottomMenu}>
          <TouchableOpacity>
            <Icon name="home" size={30} color="black" />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="payment" size={30} color="black" />
            <Text style={styles.iconText}>Pagamento</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="assignment" size={30} color="black" />
            <Text style={styles.iconText}>Inscrição</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings" size={30} color="black" />
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
  iconText: {
    fontSize: 12,
    color: 'black',
    opacity: 0.6,
    textAlign: 'center',
  },
});
