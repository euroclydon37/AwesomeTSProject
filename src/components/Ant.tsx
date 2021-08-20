import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DARK_FONT } from '../constants/styles';
import { GetAllAnts_ants } from '../constants/__generated__/GetAllAnts';

interface Props {
  ant: GetAllAnts_ants;
  winChance?: number;
  isCalculating?: boolean;
  onPress: () => void;
}

export function Ant({ ant, winChance, isCalculating, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ant.name}</Text>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Color</Text>
        <Text style={styles.value}>{ant.color}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Length</Text>
        <Text style={styles.value}>{ant.length}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.value}>{ant.weight}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Chance of Winning</Text>
        {typeof winChance === 'number' ? (
          <Text style={styles.value}>{String(winChance)}</Text>
        ) : isCalculating ? (
          <Text style={styles.value}>calculating...</Text>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.value}>Tap to calculate</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    shadowColor: 'black',
    borderRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: DARK_FONT,
    marginBottom: 8,
  },
  statContainer: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: '800',
    marginRight: 8,
    color: DARK_FONT,
  },
  value: {},
});
