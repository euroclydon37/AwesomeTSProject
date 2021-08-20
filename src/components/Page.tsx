import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DARK_FONT } from '../constants/styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Page({ title, children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: '100%',
  },
  header: {
    marginHorizontal: 16,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '800',
    color: DARK_FONT,
  },
});
