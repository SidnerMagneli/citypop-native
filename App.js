import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, Button } from 'galio-framework';


export default function App() {
  
  // the geolocations (cities) to be displayed
  [geolocations, setGeolocationss] = useState([]);

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
    backgroundColor: '#ecf1f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
