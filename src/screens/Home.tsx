import { useQuery } from '@apollo/client';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ALL_ANTS } from '../constants/queries';
import { GetAllAnts } from '../constants/__generated__/GetAllAnts';

export function HomeScreen() {
  const { data } = useQuery<GetAllAnts>(ALL_ANTS);

  if (data) {
    console.log(data);
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
