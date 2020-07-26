import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, Button } from 'galio-framework';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  // the geolocations (cities) to be displayed
  [geolocations, setGeolocations] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}

        />
        <Stack.Screen 
          name='Search'
          component={SearchScreen}
          options={({route}) => ({ title: 'Search ' + route.params.type })}
        />
        <Stack.Screen 
          name='City'
          component={CityScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <Text h1>CityPop Native</Text>
    <Button round 
      size="large" 
      color="#f4b400" 
      onPress={() => { navigation.navigate('Search', { type: 'city', setGeolocations: setGeolocations }) }}
    >City</Button>
    <Button round 
      size="large" 
      color="#4285f4" 
      onPress={() => { navigation.navigate('Search', { type: 'country', setGeolocations: setGeolocations }) }}
    >Country</Button>
  </View>
);

const SearchScreen = () => (
  <View style={styles.container}>
    <StatusBar style='auto' />
    <Text>Search screen</Text>
  </View>
);

const CityScreen = () => (
  <View style={styles.container}>
    <StatusBar style='auto' />
    <Text>City screen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
