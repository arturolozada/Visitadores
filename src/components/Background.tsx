/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#049DD9',
                width: width,
                height: height,
            }}
        />
    );
};

