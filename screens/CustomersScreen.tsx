import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';

import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

import { Image, Input} from '@rneui/themed'

export type CustomerScreenNavigationProp = CompositeNavigationProp< 
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList, 'Main'>
>


const CustomersScreen = () => {
    const tw  = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const [input, setInput] = useState<string>('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
        
    }, [])
 



    return (
        <ScrollView style={{ backgroundColor: '#59C1CC'}}>
        
            <Image 
            source={{ uri: 'https://links.papareact.com/3jc'}}  
            containerStyle={tw('w-full h-64')}
           
            
            />

            <Input placeholder="Search by Customer" />
        
        </ScrollView>
    )
}

export default CustomersScreen;