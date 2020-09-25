import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tailwind from 'tailwind-rn';


const Stack = createStackNavigator();

export default function App() {
  
  // the geolocations (cities) to be displayed
  [geolocations, setGeolocations] = useState([]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
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
  <SafeAreaView style={tailwind('h-full')}>
    <View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>
          CityPop Native
          </Text>
      </View>
    </View>
  </SafeAreaView>
);

const SearchScreen = () => (
  <SafeAreaView style={tailwind('h-full')}>
    <View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>
          CityPop Native
      </Text>
      </View>
    </View>
  </SafeAreaView>
);

const CityScreen = () => (
  <SafeAreaView style={tailwind('h-full')}>
    <View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>
          CityPop Native
      </Text>
      </View>
    </View>
  </SafeAreaView>
)
