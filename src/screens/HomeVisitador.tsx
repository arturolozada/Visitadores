/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text,View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';


export const HomeVisitador = () => {

  const {top} = useSafeAreaInsets();

  const rendetListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones</Text>
      </View>
    );
  };
  
  const itemSeparator = () => {
    return (
      <View
        style= {{ 
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
      );
  };

  return (
    <View style={{flex:1, ...styles.globalMargin}}>

      <FlatList
        data={menuItems}
        renderItem={ ({item}) => <FlatListMenuItem menuItem={item} /> }
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ rendetListHeader }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  ); 
};
