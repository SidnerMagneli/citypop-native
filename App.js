import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text } from 'galio-framework';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text h1>CityPop Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
