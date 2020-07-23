import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, Button } from 'galio-framework';

// the geolocations (cities) to be displayed
[geolocations, setGeolocationss] = useState([]);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text h1>CityPop Native</Text>
      <Button round size="large" color="#f4b400">City</Button>
      <Button round size="large" color="#4285f4">Country</Button>
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
