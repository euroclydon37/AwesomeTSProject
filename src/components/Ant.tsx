import React from 'react';
import { Text, View } from 'react-native';
import { GetAllAnts_ants } from '../constants/__generated__/GetAllAnts';

interface Props {
  ant: GetAllAnts_ants;
}

export function Ant({ ant }: Props) {
  return (
    <View>
      <Text>{ant.name}</Text>
      <Text>{ant.color}</Text>
      <Text>{ant.length}</Text>
      <Text>{ant.weight}</Text>
    </View>
  );
}
