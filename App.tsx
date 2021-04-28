/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ActivityIndicator } from 'react-native';

const App = () => {
  return (
    <NavigationContainer >
      <ActivityIndicator />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;

