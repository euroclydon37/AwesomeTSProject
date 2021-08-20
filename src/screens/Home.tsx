/* eslint-disable curly */
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ant } from '../components/Ant';
import { Page } from '../components/Page';
import { ALL_ANTS } from '../constants/queries';
import { DARK_FONT } from '../constants/styles';
import { GetAllAnts } from '../constants/__generated__/GetAllAnts';
import { getWinChance } from '../utils/winLiklihoodCalculator';

interface Chance {
  isLoading?: boolean;
  chance?: number;
}

export function HomeScreen() {
  const { data } = useQuery<GetAllAnts>(ALL_ANTS);

  const [chances, setChances] = useState<Record<string, Chance>>({});

  const chanceUpdater = (key: string) => (value: Chance) =>
    setChances(prevChances => ({ ...prevChances, [key]: value }));

  const getAndUpdateWinChance = (antName: string) => async () => {
    const updateChance = chanceUpdater(antName);
    updateChance({ isLoading: true });
    updateChance({ chance: await getWinChance() });
  };

  const calculateAll = () =>
    data?.ants.forEach(ant => {
      if (!ant) return;
      if (chances[ant.name]?.isLoading !== undefined) return;
      if (chances[ant.name]?.chance !== undefined) return;

      getAndUpdateWinChance(ant.name)();
    });

  const allAreLoaded = data?.ants.every(
    ant => ant && chances[ant?.name]?.chance !== undefined,
  );

  return (
    <Page title="Home">
      {!allAreLoaded && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={calculateAll}>
          <Text style={styles.buttonText}>Calculate All</Text>
        </TouchableOpacity>
      )}
      {data?.ants.map(ant => {
        if (!ant) return null;

        const onPress = getAndUpdateWinChance(ant.name);

        const { isLoading, chance } = chances[ant.name] ?? {};

        return (
          <Ant
            key={ant.name}
            onPress={onPress}
            winChance={chance}
            isCalculating={isLoading}
            ant={ant}
          />
        );
      })}
    </Page>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(100, 100, 225)',
    width: 120,
    marginLeft: 16,
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loadingText: {
    color: DARK_FONT,
    marginLeft: 16,
  },
});
