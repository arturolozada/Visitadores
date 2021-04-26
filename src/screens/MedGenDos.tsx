/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useRef } from 'react';
import { Dimensions, Image, View, ImageSourcePropType, SafeAreaView, TouchableOpacity, Text, Animated } from 'react-native';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';


const {height:sliderHeight, width:sliderWidth} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Artrinal',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/CORTIDEXAN1.png')
    },
    {
        title: 'Artrinal',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/CORTIDEXAN2.png')
    },
    {
        title: 'Artrinal',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/CORTIDEXAN3.png')
    },
    {
        title: 'Artrinal',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/CORTIDEXAN4.png')
    },
];

interface Props extends  StackScreenProps<any, any> {}

export const MedGenDos = ({ navigation }:Props) => {

    const [activeIndex,setActiveIndex] = useState(0);
    const {opacity,fadeIn} = useAnimation();
    const isVisible = useRef(false);

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex:1,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 5,
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <Image
                    source={item.img}
                    style={{
                        flex: 1,
                        marginTop:5,
                        width:500,
                        height:190,
                        resizeMode:'cover',
                        //...StyleSheet.absoluteFillObject,
                    }}
                />
            </View>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex:1,
                paddingTop: 10,
        }}>
            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({item}:any) => renderItem(item)}
                sliderWidth={ sliderWidth }
                sliderHeight={sliderHeight}
                itemWidth={ sliderWidth }
                layout="tinder"
                layoutCardOffset={4}
                onSnapToItem= {(index) => {
                    setActiveIndex(index);
                    if ( index === 3 ) {
                        isVisible.current = true;
                        fadeIn();
                        }
                }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                marginHorizontal:20,
                alignItems:'center'
                }}>

                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width:7,
                        height:7,
                        borderRadius:10,
                        backgroundColor: '#5856d6'
                    }}
                />

                <Animated.View
                    style={{
                        opacity
                    }}>
                    <TouchableOpacity style={{
                            flexDirection:'row',
                            backgroundColor: '#5856d6',
                            width: 140,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems:'center',}}
                        activeOpacity={0.8}
                        onPress={ () => {
                            if ( isVisible.current ) {
                                navigation.navigate('HomeVisitador');
                            }}}
                    >
                        <Text style={{fontSize:25,color:'white'}}>
                            Menú
                        </Text>
                        <Icon
                            name="chevron-forward-outline"
                            color="white"
                            size={30}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};
