import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe a biblioteca de ícones

const rankingData = [
  { id: '1', name: 'Daniil Medvedev', country: 'Russia', score: '7.800', icon: 'rocket' },
  { id: '2', name: 'Alexander Zverev', country: 'Germany', score: '7.075', icon: 'star' },
  { id: '3', name: 'Novak Djokovic', country: 'Serbia', score: '6.770', icon: 'trophy' },
  { id: '4', name: 'Rafael Nadal', country: 'Spain', score: '6.525', icon: 'heartbeat' },
  { id: '5', name: 'Casper Ruud', country: 'Norway', score: '4.980', icon: 'snowflake-o' },
  { id: '6', name: 'Jonas Macron', country: 'Greece', score: '4.900', icon: 'sun-o' },
  { id: '7', name: 'Carlos Alcaraz', country: 'Spain', score: '4.890', icon: 'bolt' },
  { id: '8', name: 'Andrey Rublev', country: 'Russia', score: '4.260', icon: 'leaf' },
  { id: '9', name: 'F. Auger-Aliassime', country: 'Canada', score: '3.955', icon: 'globe' },
  { id: '10', name: 'Matteo Berrettini', country: 'Italy', score: '3.805', icon: 'paw' },
];

export default function TelaRanking() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Icon name={item.icon} size={30} color="#d67e36" style={styles.playerIcon} />
      <View style={styles.textContainer}>
        <Text style={styles.playerName}>#{item.id} {item.name}</Text>
        <Text style={styles.playerCountry}>{item.country}</Text>
      </View>
      <Text style={styles.playerScore}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={rankingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdf6f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10, 
  },
  playerIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b55326',
  },
  playerCountry: {
    fontSize: 14,
    color: '#777',
  },
  playerScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d67e36',
  },
});
