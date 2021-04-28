/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeVisitador } from '../screens/HomeVisitador';
import { MedGenUno } from '../screens/MedGenUno';
import { MedGenDos } from '../screens/MedGenDos';
import { MedInternista } from '../screens/MedInterno';
import { MedPediatra } from '../screens/MedPediatra';
import { MedOrtopedia } from '../screens/MedOrtopedia';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeVisitador" component={HomeVisitador} />
      <Stack.Screen name="MedGenUno" component={MedGenUno} />
      <Stack.Screen name="MedGenDos" component={MedGenDos} />
      <Stack.Screen name="MedInterno" component={MedInternista} />
      <Stack.Screen name="MedPediatra" component={MedPediatra} />
      <Stack.Screen name="MedOrtopedia" component={MedOrtopedia} />
    </Stack.Navigator>
  );
};