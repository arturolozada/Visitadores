/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
//nuevo para splash
import SplashScreen from 'react-native-splash-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';

const { width: sliderWidth } = Dimensions.get('window');

export const HomeVisitador = () => {

  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <>
        <View>
          <Image
            source={require('../assets/ic_launcher.png')}
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              marginHorizontal: sliderWidth - 150,
            }}
          />
        </View>
        <View style={{ marginTop: top + 25, marginBottom: 30 }}>
          <Text style={styles.title}>BIOQUIFAR - Visitador</Text>
        </View>
      </>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 5,
        }}
      />
    );
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
