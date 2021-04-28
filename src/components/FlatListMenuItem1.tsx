/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View, Button, Image } from 'react-native';
import { MenuItem } from '../intefaces/appinterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
//import { Background } from './Background';

interface Props {
  menuItem: MenuItem
}

export const FlatListMenuItem1 = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color="#049DD9"
          size={23}
        />
        <Button title={menuItem.name}
          onPress={() => navigation.navigate(menuItem.component)}
        />
        <Icon
          name="chevron-forward-outline"
          color="#049DD9"
          size={23}
          style={{ marginRight: 30 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemText: {
    marginRight: 10,
    fontSize: 19,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
