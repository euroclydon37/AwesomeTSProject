import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

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
    marginHorizontal: 16,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '800',
    color: 'rgb(50, 50, 50)',
  },
});
